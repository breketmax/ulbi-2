import {render} from "react-dom";
import router from "./pages";
import {RouterProvider} from "react-router-dom";
import {ThemeProvider} from "app/providers/ThemeProvider";

render(
    <ThemeProvider>
        <RouterProvider router={router} />
    </ThemeProvider>,
    document.getElementById('root')
);