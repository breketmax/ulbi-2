import routerConfig from 'shared/config/routerConfig/routerConfig';
import { RouterProvider } from 'react-router-dom';

const withRouter = () => () => <RouterProvider router={routerConfig} />;

export default withRouter;
