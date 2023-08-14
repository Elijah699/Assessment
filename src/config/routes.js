import { useRoutes } from 'react-router';
import Dashboard from '../page/Dashboard';
import CoverLetters from '../page/CoverLetters';


export const Routes = () => {
  return useRoutes([
    {
        path: "/",
        element: <Dashboard />
    },
    {
      path: '/coverletter',
      element: <CoverLetters />
    }
  ]);
};
