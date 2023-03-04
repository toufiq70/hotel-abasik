import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../pages/shared/Footer/Footer';
import Nav from '../../pages/shared/Nav/Nav/Nav';

const Rooot = () => {
    return (
        <div>
            <Nav/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Rooot;