import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from 'app/providers/RouterProvider';
import React from 'react';
import { useTheme } from 'app/providers/ThemeProvider';

export const Layout = (): React.JSX.Element => {
  const { theme } = useTheme();

  return (
    <div className={classNames('layout', {}, [theme])}>
      <Navbar/>
      <div className="content-page">
        <Sidebar/>
        <AppRouter />
      </div>
    </div>
  );
};
