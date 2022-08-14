import Table from 'react-bootstrap/Table';
import bootstrap from 'bootstrap'
import { useState, useEffect } from 'react';
import axios from 'axios';


function TableList() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('/board/2');
        setTableData(res.data.products);
      } catch (e) {
        console.error(e.message)
      }
    })();
  }, [])

  return (
    <div>

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
              tableData.map((data) => {
                return (
                  <tr key={data.id}>
                    <th scope="row">{data.id}</th>
                    <td>{data.thumbnail}</td>
                    <td>{data.nickname}</td>
                    <td>{data.created_at.substr(0,10)}</td>
                  </tr>
                );
              })
            }
            {/* <tr>
              <th scope="row">1</th>
              <td> </td>
              <td>res.data.id</td>
              <td>res.data.created_at</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>아이패드 찾아요 </td>
              <td>최수연</td>
              <td>2022-07-29</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableList;