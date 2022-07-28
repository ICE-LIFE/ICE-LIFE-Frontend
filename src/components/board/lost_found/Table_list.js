
import Table from 'react-bootstrap/Table';
import bootstrap from 'bootstrap'

function Table_list() {

  return (
    <div>
      
      {/* <List items={list}/> */}
      <div className='table_list'>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">제목</th>
      <th scope="col">글쓴이</th>
      <th scope="col">작성일자</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    <tr>
      <th scope="row">1</th>
      <td>아이패드 주인찾아요 </td>
      <td>김철수</td>
      <td>2022-07-28</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>아이패드 찾아요 </td>
      <td>최수연</td>
      <td>2022-07-29</td>
    </tr>
  </tbody>
</table>
</div>
    </div>
  );
}

export default Table_list;