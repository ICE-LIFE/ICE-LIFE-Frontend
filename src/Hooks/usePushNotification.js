import { useRef } from "react";

const usePushNotification = () => {
    const notificationRef = useRef(null);

    // Notification이 지원되지 않는 브라우저가 있을 수 있기 때문에, 이를 대비해 Early return 문을 걸어준다.
    if (!Notification)
        return;

    // 만약 이미 유저가 푸시 알림을 허용해놓지 않았다면,
    if (Notification.permission !== "granted") {
        // 유저에게 푸시 알림을 허용하겠냐고 물어보고, 허용하지 않으면 return!
        try {
            Notification.requestPermission(permission => {
                if (permission !== "granted") return;
            });
        } catch (error) {
            console.error(error);
        }
    }

    // 유저가 푸시 알림을 클릭하면, 푸시 알림이 일어난 화면으로 이동하기
    const setNotificationClickEvent = () => {
        notificationRef.current.onclick = e => {
            e.preventDefault();
            window.focus();
            notificationRef.current.close();
        };
    };

    const fireNotification = (title, options) => {
        const newOption = {
            badge: "",
            icon: "",
            ...options
        };

        // notificationRef에 Notification을 넣어준다. 이 친구는 이렇게 할당만해도 바로 실행된다.
        notificationRef.current = new Notification(title, newOption);

        // 위에서 만든 클릭 이벤트 걸어주기
        setNotificationClickEvent();
    };

    return fireNotification;
};


export default usePushNotification;