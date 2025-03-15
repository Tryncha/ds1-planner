import { Outlet } from 'react-router-dom';
import { BuildProvider } from '../../context/BuildContext';

const PlannerLayout = () => {
  return (
    <BuildProvider>
      <Outlet />
    </BuildProvider>
  );
};

export default PlannerLayout;
