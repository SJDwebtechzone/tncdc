import React from 'react';
import { Sidebar } from './Sidebar';
import Dashboard from './Dashboard';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';

const DashboardLayout = () => {
    return (
        <div className="flex bg-gray-50 min-h-screen font-sans">
            <Sidebar />
            <div className="flex-1 flex flex-col h-screen w-full">
                <Header />
                <div className="flex-1 ml-64 p-4 overflow-y-auto">
                    <div className="flex flex-col min-h-full justify-between">
                        <div className="w-full">
                            {/* Render Dashboard by default if no child route matches, or Outlet for sub-routes */}
                            <Outlet />
                        </div>
                        <div className="mt-4 text-sm text-gray-500">
                            Copyright 2026-27 © DITRP INDIA All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;






