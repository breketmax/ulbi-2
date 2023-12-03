import compose from 'compose-function';
import { withTheme } from 'app/providers/ThemeProvider';
import { withRouter } from 'app/providers/RouterProvider';
export const withProviders = compose(withTheme, withRouter);
