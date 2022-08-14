import React, {useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Auth } from "pages";
import './App.css';
import axios from 'axios';
import LostFound from "components/board/LostFound";
import Notice from "components/board/Notice";

const App = () => {


  return (
    <>
      <LostFound />
      <Notice />
    </>
  );
};

export default App;
