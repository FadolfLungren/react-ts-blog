import React, {useCallback, useEffect, useRef, useState} from 'react';

import {useAppDispatch, useAppSelector} from "./strore/redux";

import {Auth, fetchSiPacks} from "./strore/actionCreators";

import MainPage from "./Pages/main/mainPage";
import {Route, Routes} from "react-router-dom";
import LoginPage from "./Pages/LoginPage/loginPage";

function App() {
    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(fetchSiPacks())
    },[])


  return (
    <Routes>
        <Route path={'/'} element={<MainPage/>}/>
        <Route path={'/login'} element={<LoginPage/>}/>
    </Routes>
  );
}

export default App;
