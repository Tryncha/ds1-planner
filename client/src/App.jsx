import { Route, Routes } from 'react-router-dom';
import Explorer from './pages/Explorer/Explorer';
import Profile from './pages/Profile/Profile';
import Register from './pages/Auth/Register/Register';
import Login from './pages/Auth/Login/Login';
import DS1Planner from './pages/Planners/DS1Planner/DS1Planner';
import DS2Planner from './pages/Planners/DS2Planner/DS2Planner';
import DS1PlannerLayout from './components/layouts/DS1PlannerLayout';
import DS2PlannerLayout from './components/layouts/DS2PlannerLayout';
import Home from './pages/Home/Home';
import SideBar from './components/SideBar/SideBar';
import { useContext, useEffect } from 'react';
import AuthContext from './context/AuthContext';
import buildsService from './services/builds';
import { clearAnonymousUserId, getAnonymousUserId } from './services/anonymousUserId';
import SelectPlanner from './pages/Planners/SelectPlanner/SelectPlanner';

const App = () => {
  const { setAuthInfo } = useContext(AuthContext);

  useEffect(() => {
    const userInfo = window.localStorage.getItem('userInfo');
    if (userInfo) {
      const newAuthInfo = JSON.parse(userInfo);
      setAuthInfo(newAuthInfo);
      buildsService.setToken(newAuthInfo.token);
      clearAnonymousUserId();
    } else {
      getAnonymousUserId();
    }
  }, [setAuthInfo]);

  return (
    <>
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/planner" element={<SelectPlanner />} />
        <Route path="/planner/dark-souls-1" element={<DS1PlannerLayout />}>
          <Route index element={<DS1Planner />} />
          <Route path=":id" element={<DS1Planner />} />
        </Route>
        <Route path="/planner/dark-souls-2" element={<DS2PlannerLayout />}>
          <Route index element={<DS2Planner />} />
          <Route path=":id" element={<DS2Planner />} />
        </Route>
        <Route path="/explorer" element={<Explorer />} />
      </Routes>
    </>
  );
};

export default App;
