import React from 'react';
import { Sidebar } from './Sidebar';
import Dashboard from './Dashboard';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className="flex bg-gray-50 min-h-screen font-sans">
            <Sidebar />
            <div className="flex-1 ml-64 p-8 overflow-y-auto h-screen w-full">
                <div className="max-w-7xl mx-auto">
                    {/* Render Dashboard by default if no child route matches, or Outlet for sub-routes */}
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
