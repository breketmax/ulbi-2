import React, {Suspense} from 'react';
import classes from "./lol.module.scss";
import './index.scss';
import {Link,Outlet} from "react-router-dom";

const App = () => {
    return (
        <div className={[classes.blackBG,'app'].join(' ')}>Hello mir manera krutit mir
            <Link to='/'>Main</Link>
            <Link to='/about'>Abaut</Link>
            <Suspense fallback={<div>loading....</div>}>
                <Outlet/>
            </Suspense>
        </div>

    );
};

export default App;