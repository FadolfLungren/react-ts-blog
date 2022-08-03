import React, {useCallback, useEffect, useRef, useState} from 'react';

import {useAppDispatch, useAppSelector} from "./strore/redux";

import {AuthUser, fetchSiPacks} from "./strore/actionCreators";

import MainPage from "./Pages/Main/mainPage";
import {Route, Routes, Navigate} from "react-router-dom";

import LoginPage from "./Pages/LoginPage/loginPage";
import ArticlePage from "./Pages/ArticlePage/articlePage";
import AdminPage from "./Pages/AdminPage/adminPage";


function App() {
    const dispatch = useAppDispatch()
    const {SiPackages} = useAppSelector(state => state.PacksReducer)
    const {isAuth} = useAppSelector(state => state.AuthReducer)
    useEffect(()=>{
        dispatch( fetchSiPacks() )
    },[])


    return (
      <div className={"wrapper"}>
          <Routes>

              <Route path={'/'} element={<MainPage/>}/>
              <Route path={'/admin'} element={isAuth ? <AdminPage/> : <Navigate to="/" />}/>
              <Route path={'/admin/add'} element={isAuth ? <AdminPage/> : <Navigate to="/" />}/>

              <Route path={'/login'} element={<LoginPage/>}/>
              <Route path={'/article/:id'} element={<ArticlePage/>}/>
              <Route path="*" element={<Navigate to="/" replace />} />

          </Routes>
      </div>
  );
}

export default App;
