import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Pagination from 'react-js-pagination'

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
`

const BoardPage = ({postIdx}) => {
    const [tableData, setTableData] = useState([]);
    const [page, setPage] = useState(1);
    const [items, setItems] = useState(5);

    useEffect(() => {
        // async는 이 부분이 비동기 처리를 하는 곳이라는 것을 알림 
        (async () => {
          try {
            // axios.get이 반환하는 것은 Promise 객체 
            // await을 붙이면 프로미스가 반환될 때까지 기다린다. 
            const res = await axios.get(`/board/${postIdx}`);
            setTableData(res.data.products);
            console.log(res.data.products);
          } catch (e) {
            console.error(e.message)
          }
        })();
      }, [])

      const handlePageChange = (page) => { setPage(page); };
      
      return (
        <>
          {/* <List items={list}/> */}
          <div className='table_list'>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">제목</th>
                  <th scope="col">글쓴이</th>
                  <th scope="col">작성일자</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
    
                {
                  tableData.slice(
                    items * (page - 1),
                    items * (page - 1) + items
                  ).map((data) => {
                    return (
                      <tr key={data.id}>
                        <th scope="row">{data.id}</th>
                        <td>{data.title}</td>
                        <td>{data.nickname}</td>
                        <td>{data.created_at.substr(0, 10)}</td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
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

export default BoardPage;