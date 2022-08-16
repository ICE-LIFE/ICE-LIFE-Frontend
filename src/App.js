import React, {useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Auth } from "Pages";
import './App.css';
import axios from 'axios';
import LostFound from "Components/board/LostFound";
import Notice from "Components/board/Notice";

const App = () => {


  return (
    <>
      <LostFound />
    </>
  );
};

export default App;
