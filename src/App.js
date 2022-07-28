import React, {useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Auth } from "pages";
import './App.css';
import Main from './components/board/lost_found/Main';
import Table_list from './components/board/lost_found/Table_list';
import Search from './components/board/lost_found/Search';
import axios from 'axios';

const App = () => {

	// 서버에서 받은 데이터를 console로 찍어서 확인한다.
  useEffect(() => {
    axios.get('/api/test')
      .then(res => console.log(res))
      .catch()
  })

  return (
    <div className="App">
      <Main />
      
      <Table_list />
      <Search />
    </div>
  );
};

export default App;
