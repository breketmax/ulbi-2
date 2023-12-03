import {
    createBrowserRouter,
} from "react-router-dom";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import App from "app/App";

export enum AppRoutes{
    MAIN = "/",
    ABOUT = "/about",
}

const router = createBrowserRouter([
    {
        path: AppRoutes.MAIN,
        element: <App />,
        children:[
            {
                path: AppRoutes.MAIN,
                element:<MainPage />
            },
            {
                path: AppRoutes.ABOUT,
                element: <AboutPage/>,
            },
        ]
    },
]);

export default router;
