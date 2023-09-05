import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../app/App";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            {
                path: "/",
                element:<MainPage />
            },
            {
                path: "/about",
                element: <AboutPage/>,
            },
        ]
    },

]);

export default router;
