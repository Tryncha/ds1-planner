import { Link, Route, Routes } from 'react-router-dom';
import Explorer from './pages/Explorer';
import Profile from './pages/Profile/Profile';
import Login from './pages/Login';
import DS1Planner from './pages/Planners/DS1Planner/DS1Planner';
import DS2Planner from './pages/Planners/DS2Planner/DS2Planner';
import DS1PlannerLayout from './components/layouts/DS1PlannerLayout';
import DS2PlannerLayout from './components/layouts/DS2PlannerLayout';
import Home from './pages/Home/Home';
import SideBar from './components/SideBar/SideBar';
import { useContext, useEffect } from 'react';
import AuthContext from './context/AuthContext';
import buildsService from './services/builds';
import { getAnonymousSession } from './services/anonymousSession';

const App = () => {
  const { auth, setAuth } = useContext(AuthContext);

  useEffect(() => {
    const loggedUser = window.localStorage.getItem('loggedUser');
    if (loggedUser) {
      const auth = JSON.parse(loggedUser);
      setAuth(auth);
      buildsService.setToken(auth.token);
    } else {
      getAnonymousSession();
    }
  }, [auth.token, setAuth]);

  return (
    <>
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
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
