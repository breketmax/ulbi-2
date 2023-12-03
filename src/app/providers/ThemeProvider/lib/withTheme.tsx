import ThemeProvider from "../ui/ThemeProvider";
import React, {Suspense} from "react";

export const withTheme = (component:() => React.ReactNode) => () => (
    <ThemeProvider>
        {component()}
    </ThemeProvider>
)