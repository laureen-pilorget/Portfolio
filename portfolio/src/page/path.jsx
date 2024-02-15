import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './home/home';
import Header from './../components/header/header';
import Footer from './../components/footer/footer';

const Path = () => (
    <Router>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
        </Routes>
        <Footer/>
    </Router>
)

export default Path