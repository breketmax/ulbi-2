import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import MainPage from "../pages/MainPage/MainPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import {MainPageAsync} from "../pages/MainPage/MainPage.async";
import {AboutPageAsync} from "../pages/AboutPage/AboutPage.async";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            {
                path: "/",
                element:<MainPageAsync />
            },
            {
                path: "/about",
                element: <AboutPageAsync />,
            },
        ]
    },

]);

export default router;
