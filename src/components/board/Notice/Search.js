import React, { useState } from 'react';
import styled from 'styled-components';
import oc from 'open-color';


const Searchbutton = styled.button`
    margin-left : 1%;
    width: 100px;
    height: 25px;
    line-height: 0px;
    border : none;
    background-color: ${oc.teal[5]};
`
const SearchText = styled.input`
    margin-left : 55%;
    width: 200px;
    height: 25px;
`
        


function Search() {
    return (
        <div>
            <div className="pageNation">
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="container">
                <SearchText  placeholder="검색할 공지사항을 입력하세요 "></SearchText>
                
                {/*   <input  type="text" placeholder="검색할 물건을 입력하세요"> 
                </input>*/}
                <Searchbutton type="submit" className="btn btn-success">검색</Searchbutton>
            </div>
        </div>

    );
}
export default Search;