import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../pages/Login';
import News from "../pages/News";
import PrivateRouter from "./PrivateRouter";
import Navbar from "../components/Navbar"

const AppRouter = () => {
  return (
    <BrowserRouter>

    <Navbar/>

      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<PrivateRouter/>}>
          <Route path="" element={<News />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter