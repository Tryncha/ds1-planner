import { Link, Route, Routes } from 'react-router-dom';
import Explorer from './pages/Explorer';
import Profile from './pages/Profile';
import Login from './pages/Login';
import DS1Planner from './pages/DS1Planner';
import DS2Planner from './pages/DS2Planner';
import PlannerLayout from './components/layouts/PlannerLayout';
import PlannerDS2Layout from './components/layouts/PlannerDS2Layout';

const App = () => {
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Link to="/">home</Link>
        <Link to="/login">to login</Link>
        <Link to="/profile">to profile</Link>
        <Link to="/planner/darksouls1">to planner ds1</Link>
        <Link to="/planner/darksouls2">to planner ds2</Link>
        <Link to="/explorer">to explorer</Link>
      </div>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
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
    </div>
  );
};

export default App;
