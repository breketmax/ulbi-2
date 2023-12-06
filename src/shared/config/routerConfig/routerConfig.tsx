import { createBrowserRouter } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import App from 'app/App';

export enum AppRoutes {
  MAIN = '/',
  ABOUT = '/about',
  NOT_FOUND = '*'
}

const router = createBrowserRouter([
  {
    path: AppRoutes.MAIN,
    element: <App />,
    children: [
      {
        path: AppRoutes.MAIN,
        element: <MainPage />,
      },
      {
        path: AppRoutes.ABOUT,
        element: <AboutPage/>,
      },
      {
        path: AppRoutes.NOT_FOUND,
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
