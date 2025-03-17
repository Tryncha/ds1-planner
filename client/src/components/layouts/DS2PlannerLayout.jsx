import { Outlet } from 'react-router-dom';
import { DS2BuildProvider } from '../../context/DS2BuildContext';

const DS2PlannerLayout = () => {
  return (
    <DS2BuildProvider>
      <Outlet />
    </DS2BuildProvider>
  );
};

export default DS2PlannerLayout;
