import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';

const AppRouter = (): React.JSX.Element => {
  return (
    <Suspense fallback={<PageLoader/>}>
      <div className="page-wrapper">
        <Outlet/>
      </div>
    </Suspense>
  );
};

export default AppRouter;
