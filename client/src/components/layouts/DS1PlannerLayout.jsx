import { Outlet } from 'react-router-dom';
import { DS1BuildProvider } from '../../context/DS1BuildContext';

const DS1PlannerLayout = () => {
  return (
    <DS1BuildProvider>
      <Outlet />
    </DS1BuildProvider>
  );
};

export default DS1PlannerLayout;
