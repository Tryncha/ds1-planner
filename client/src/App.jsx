import { Link, Route, Routes } from 'react-router-dom';
import Explorer from './pages/Explorer';
import Profile from './pages/Profile/Profile';
import Login from './pages/Login';
import DS1Planner from './pages/Planners/DS1Planner/DS1Planner';
import DS2Planner from './pages/Planners/DS2Planner/DS2Planner';
import PlannerLayout from './components/layouts/PlannerLayout';
import PlannerDS2Layout from './components/layouts/PlannerDS2Layout';
import Home from './pages/Home/Home';
import SideBar from './components/SideBar/SideBar';

const App = () => {
  return (
    <>
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/planner/darksouls1" element={<PlannerLayout />}>
          <Route index element={<DS1Planner />} />
          <Route path=":id" element={<DS1Planner />} />
        </Route>
        <Route path="/planner/darksouls2" element={<PlannerDS2Layout />}>
          <Route index element={<DS2Planner />} />
          <Route path=":id" element={<DS2Planner />} />
        </Route>
        <Route path="/explorer" element={<Explorer />} />
      </Routes>
    </>
  );
};

export default App;
