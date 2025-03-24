import { Outlet } from 'react-router-dom';
import { ERBuildProvider } from '../../context/ERBuildContext';

const ERPlannerLayout = () => {
  return (
    <ERBuildProvider>
      <Outlet />
    </ERBuildProvider>
  );
};

export default ERPlannerLayout;
