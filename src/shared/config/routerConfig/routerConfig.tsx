import { createBrowserRouter } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { Layout } from 'widgets/Layout';
import { withErrorBoundary } from 'app/providers/ErrorBoundary';

export enum AppRoutes {
  MAIN = '/',
  ABOUT = '/about',
  NOT_FOUND = '*'
}

const router = createBrowserRouter([
  {
    element: withErrorBoundary(<Layout />),
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
