import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Pagination from 'react-js-pagination'
import { Link } from "react-router-dom";
import { useAuthState } from 'Context';

const PaginationBox = styled.div`
  .pagination { display: flex; justify-content: center; margin-top: 15px;}
  ul { list-style: none; padding: 0; }
  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem; 
  }
  ul.pagination li:first-child{ border-radius: 5px 0 0 5px; }
  ul.pagination li:last-child{ border-radius: 0 5px 5px 0; }
  ul.pagination li a { text-decoration: none; color: #337ab7; font-size: 1rem; }
  ul.pagination li.active a { color: white; }
  ul.pagination li.active { background-color: #337ab7; }
  ul.pagination li a:hover,
  ul.pagination li a.active { color: blue; }
`;

const Table = styled.table`
  text-align: center;
  vertical-align: middle;
  width: 80vw;

  // 테이블 값을 중앙으로 
  // 세로방향  | 가로방향 
  margin: 0 auto;
`;

const Thead = styled.thead`
  border-style: solid;
  border-width: 1px 0px 0px 0px;
  border-color: var(--color-dark);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  :hover {
    color: black;
  }
`;

const PostList = ({ boardIdx }) => {
  const userInfo = useAuthState();
  const accessToken = userInfo.token || "";
  const [tableData, setTableData] = useState([]);
  const [page, setPage] = useState(1);
  const items = 5;

  useEffect(() => {
    // async는 이 부분이 비동기 처리를 하는 곳이라는 것을 알림 
    (async () => {
      try {
        // axios.get이 반환하는 것은 Promise 객체
        // await을 붙이면 프로미스가 반환될 때까지 기다린다.
        const res = await axios.get(`/board/${boardIdx}`,{ headers: { "Authorization": `Bearer ${accessToken}` } });
        setTableData(res.data.content);
      } catch (e) {
        console.error(e.message)
      }
    })();
  }, [])

  const handlePageChange = page => setPage(page);

  return (
    <>
      {/* <List items={list}/> */}
      <div>
        <Table className="table">
          <Thead>
            <tr>
              {/* th : table head , 테이블의 열  */}
              <th scope="col">제목</th>
              <th scope="col">글쓴이</th>
              <th scope="col">작성일자</th>
            </tr>
          </Thead>
          <tbody className="table-group-divider">

            {
              tableData.slice(
                items * (page - 1),
                items * (page - 1) + items
              ).map((data, idx) => {
                return (
                  <tr style={{ height: "70px" }} key={data.id}>
                    <td style={{ textAlign: "left", paddingLeft: "50px" }}> <StyledLink to={`/${boardIdx}/${idx}`}>{data.title}</StyledLink></td>
                    <td>{data.authorId}</td>
                    <td>{data.createdAt.substr(0, 10)}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </Table>
      </div>
      <PaginationBox>
        <Pagination
          activePage={page}
          itemsCountPerPage={items}
          totalItemsCount={tableData.length - 1}
          pageRangeDisplayed={5}
          onChange={handlePageChange}>
        </Pagination>
      </PaginationBox>
    </>
  );
};

export default PostList;