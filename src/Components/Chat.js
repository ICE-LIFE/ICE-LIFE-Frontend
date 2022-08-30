import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import * as StompJs from "@stomp/stompjs";
import * as SockJS from "sockjs-client";
import { useAuthState } from "Context";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import usePushNotification from "Hooks/usePushNotification";

const Container = styled.div`
    position: fixed;
    bottom: 0;
    left: 2rem;
    background-color: white;
    border: 2px solid black;
    border-radius: 0.25rem;
    padding: 0.5rem;
    transition-duration: 10s;
`;

const Controller = styled.button`
    box-sizing: content-box;
    width: 1.5rem;
    height: 1.5rem;
    padding: 0;
    border: 0;
    background-color: rgba(0, 0, 0, 0);
    opacity: .5;
    :hover {
        opacity: .9;
    }
`;

const Admission = styled.button`
    font-size: 1.5rem;
    margin: 1rem;
    border: 2px solid var(--color-accent);
    border-radius: 0.25rem;
    background-color: rgba(0, 0, 0, 0);
`;

const Chat = () => {
    const userInfo = useAuthState();
    const accessToken = userInfo.token || "";
    const email = userInfo.user || "";
    const userIdNum = userInfo.userIdNum || 0;
    const publicRoomSeq = 0; // 0번 방은 기본으로 들어가 있을 공용 채팅방

    const triggerNotify = usePushNotification();

    const ROOM_SEQ = useRef(publicRoomSeq); // room_id
    const client = useRef({});
    const [inviteUser, setInviteUser] = useState(""); // 초대 될 사람의 학번
    const [visible, setVisible] = useState(true);
    const [minimize, setMinimize] = useState(false);
    const [admission, setAdmission] = useState(false);
    const [invited, setInvited] = useState(false);
    const [chatRoomName, setChatRoomName] = useState("private");
    const [participants, setParticipants] = useState([]);
    const [chatMessages, setChatMessages] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        connect();

        return () => disconnect();
    }, []);

    // 웹소켓 연결
    const connect = () => {
        client.current = new StompJs.Client({
            webSocketFactory() {
                return new SockJS("https://home.astro36.me/api/ws");
            },
            connectHeaders: {
                access_token: accessToken,
            },
            debug: str => console.log(str),
            reconnectDelay: 5000,
            heartbeatIncoming: 4000,
            heartbeatOutgoing: 4000,
            onStompError: frame => console.error(frame),
            onConnect: () => {
                // 공용방 입장 권한 획득
                client.current.publish({
                    destination: `/app/room/${publicRoomSeq}/invite`,
                    body: `${userIdNum}`,
                });
                // 공용방 구독
                client.current.subscribe(`/user/${email}/topic/room/${publicRoomSeq}`, ({ body }) => {
                    // 호출된 사람이 나인 경우에만 채팅 알림
                    const found = JSON.parse(body).content.match(/\d+/g);
                    if (parseInt(found[1]) === userIdNum) {
                        triggerNotify(`채팅방 초대 알림`, { body: `${JSON.parse(body).content}` });
                        ROOM_SEQ.current = parseInt(found[2]);
                    }
                });
            },
        });

        client.current.activate();
    };

    // 웹소켓 연결 해제
    const disconnect = () => client.current.deactivate();

    // 채팅방 개설
    const establish = () => {
        client.current.subscribe(`/user/${email}/queue/room/join`, ({ body }) => {
            ROOM_SEQ.current = JSON.parse(body).where;

            setParticipants([JSON.parse(body).members]);

            subscribe();
        });
        client.current.publish({
            destination: "/app/room/create",
            body: `${chatRoomName}`,
        });
    };

    // 채팅방 입장
    const subscribe = () => {
        client.current.subscribe(`/user/${email}/topic/room/${ROOM_SEQ.current}`, ({ body }) => {
            if (JSON.parse(body).from !== userIdNum)
                triggerNotify(`채팅 알림`, { body: `${JSON.parse(body).content}` });
            setChatMessages(_chatMessages => [..._chatMessages, body]);
        });
    };

    // 채팅 메세지 발송
    const publish = message => {
        if (!client.current.connected)
            return;

        client.current.publish({
            destination: `/app/room/${ROOM_SEQ.current}`,
            body: message,
        });

        setMessage("");
    };

    // 채팅방 초대
    // 특정 채팅방에 참여할 권한을 부여함
    const invite = () => {
        client.current.publish({
            destination: `/app/room/${ROOM_SEQ.current}/invite`,
            body: `${inviteUser}`,
        });

        // 초대 메세지 발송
        client.current.publish({
            destination: `/app/room/${publicRoomSeq}`,
            body: `${userIdNum}님이 ${inviteUser}님을 ${ROOM_SEQ.current}번 채팅방에 초대합니다.`,
        });
        setInviteUser("");
    };


    const handleEstablish = async e => {
        e.preventDefault();
        establish();
        setAdmission(true);
    };

    const handleAdmission = async () => {
        subscribe();
        setAdmission(true);
    };


    const handleInvite = async e => {
        e.preventDefault();
        setInvited(true);
    };

    // 트랜지션 넣는건 나중에...
    return (
        <>
            {visible ?
                minimize ? <Container><Controller onClick={e => { e.preventDefault(); setMinimize(false); }}><ExpandLessIcon /></Controller></Container> :

                    admission ?
                        <Container>
                            <div>
                                <Controller onClick={e => { e.preventDefault(); setVisible(false); }}><CloseIcon /></Controller>
                                <Controller onClick={e => { e.preventDefault(); setMinimize(true); }}><ExpandMoreIcon /></Controller>
                                {invited ?
                                    <input type={"text"} placeholder={"초대할 사람의 학번"} value={inviteUser}
                                        onChange={e => setInviteUser(e.target.value)}
                                        onKeyPress={e => e.key === "Enter" && invite()}></input>
                                    :
                                    <button onClick={handleInvite}>대화 상대 초대</button>
                                }

                            </div>
                            {chatMessages && chatMessages.length > 0 && (
                                <ul>
                                    {chatMessages.map((_chatMessage, index) => (
                                        <li key={index}>{JSON.parse(_chatMessage).content}</li>
                                    ))}
                                </ul>
                            )}
                            <div>
                                <input
                                    type={"text"}
                                    placeholder={"메세지를 입력해주세요."}
                                    value={message}
                                    onChange={e => setMessage(e.target.value)}
                                    onKeyPress={e => e.key === "Enter" && publish(message)}
                                />
                                <button onClick={() => publish(message)}>전송</button>
                            </div>
                        </Container>
                        :
                        <Container>
                            <div>
                                <Controller onClick={e => { e.preventDefault(); setVisible(false); }}><CloseIcon /></Controller>
                                <Controller onClick={e => { e.preventDefault(); setMinimize(true); }}><ExpandMoreIcon /></Controller>
                            </div>
                            <Admission onClick={handleEstablish}>새 채팅방 개설</Admission>
                            <Admission onClick={handleAdmission}>초대받은 채팅방 입장</Admission>
                        </Container>
                : null
            }
        </>
    );
};

export default Chat;