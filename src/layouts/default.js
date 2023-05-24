import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { UserContext } from "../context/userContext";
import Header from '../components/header';
import Footer from '../components/footer';

const DefaultLayout = ({ children }) => {
    const [userToken, setUserToken] = useState(() => {
        const storedUser = localStorage.getItem('userToken');
        return storedUser ? JSON.parse(storedUser) : null;
    });
    
    useEffect(() => {
        if (userToken) {
        localStorage.setItem('userToken', JSON.stringify(userToken));
        } else {
        localStorage.removeItem('userToken');
        }
    }, [userToken]);
    
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default DefaultLayout;