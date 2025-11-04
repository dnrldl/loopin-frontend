import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import RootLayout from '@/app/layouts/RootLayout';
import { dmRoutes } from '@/features/dm/routes';
import { feedRoutes } from '@/features/feed/routes';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={'feed'} />,
      },
      feedRoutes,
      dmRoutes,
    ],
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
