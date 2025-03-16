import { Outlet } from 'react-router-dom';
import { BuildProvider } from '../../context/BuildDS2Context';

const PlannerDS2Layout = () => {
  return (
    <BuildProvider>
      <Outlet />
    </BuildProvider>
  );
};

export default PlannerDS2Layout;
