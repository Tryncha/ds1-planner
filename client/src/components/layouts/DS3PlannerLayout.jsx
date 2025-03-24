import { Outlet } from 'react-router-dom';
import { DS3BuildProvider } from '../../context/DS3BuildContext';

const DS3PlannerLayout = () => {
  return (
    <DS3BuildProvider>
      <Outlet />
    </DS3BuildProvider>
  );
};

export default DS3PlannerLayout;
