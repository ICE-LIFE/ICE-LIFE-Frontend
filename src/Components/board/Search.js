import React, { useState } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import axios from 'axios';


const SearchContainer = styled.div`
    float: right;
    
    // 10% , width 기준 
    margin-right : 10vw;

`

const Searchbutton = styled.button`
    padding: 5px 10px;
    border-radius: 15px;
    height: 25px;
    width: 70px;
    
    text-decoration: none;
    font-weight: 600;
    transition: 0.1s;

    border: none;
    color: #ffffff;
    background : #1E21CB;
    :hover {
        letter-spacing: 1px;
        transform: scale(1.05);
        cursor: pointer;
    }
    line-height: 0px;
    border : none;
`
const SearchText = styled.input`
    margin-right: 10px;
    width: 175px;
    height: 25px;
`
        


function Search() {
    const [searchTerm, setSearchTerm] = useState("");


    return (
        <div>
            <SearchContainer>
                <SearchText 
                placeholder="검색할 물건을 입력하세요 " 
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                    // 입력한 단어가 searchTerm에 저장 
                    console.log(searchTerm)
                  }} 
                >
                </SearchText>

                <Searchbutton>검색</Searchbutton>
            </SearchContainer>
            
        </div>

    );
}
export default Search;