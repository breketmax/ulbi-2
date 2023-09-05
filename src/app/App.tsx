import React, {Suspense, useContext, useState} from 'react';
import "./styles/index.scss"
import {Link,Outlet} from "react-router-dom";
import {useTheme} from "./providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";



const App = () => {
    const {toggleTheme,theme} = useTheme();
    return (
        <div className={classNames('app',{},[theme])}>
            Hello mir manera krutit mir
            <button onClick={toggleTheme}>Change theme</button>
            <Link to='/'>Main</Link>
            <Link to='/about'>Abaut</Link>
            <Suspense fallback={<div>loading....</div>}>
                <Outlet/>
            </Suspense>
        </div>

    );
};

export default App;