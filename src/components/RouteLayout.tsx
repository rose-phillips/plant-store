import React from 'react'
import { NavBar } from './NavBar';
import { Outlet } from 'react-router';

export const RouteLayout = () => {
return (
        <div className='app'>
            <header>
                <NavBar />
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}
