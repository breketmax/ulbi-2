import React, {Suspense} from 'react';
import {Outlet} from "react-router-dom";

const AppRouter = () => {
    return (
        <div className="page-wrapper">
            <Suspense fallback={<div>loading....</div>}>
             <Outlet/>
            </Suspense>
        </div>
    );
};

export default AppRouter;