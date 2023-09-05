import {render} from "react-dom";
import router from "./scripts/router";
import {RouterProvider} from "react-router-dom";

render(
    <RouterProvider router={router} />,
    document.getElementById('root')
);