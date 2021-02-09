import React, { useEffect } from 'react';
import Sidebar from 'Shared/Components/Sidebar';
import Header from 'Shared/Components/Header';
import MainContent from 'Shared/Components/MainContent';

const Layout = (props) => {
    return (
        <>
            <div className="grid grid-cols-6 h-full bg-metronic-content">
                <div className="col-span-1 bg-metronic">
                    <Sidebar />
                </div>
                <div className="col-span-5">
                    <Header />
                    <MainContent children={props.children} />
                </div>
            </div>
        </>
    )
}

export default Layout;
