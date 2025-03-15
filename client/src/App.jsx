import { Link, Route, Routes } from 'react-router-dom';
import Explorer from './pages/Explorer';
import Profile from './pages/Profile';
import PlannerLayout from './components/layouts/PlannerLayout';
import Planner from './pages/Planner';
import Login from './pages/Login';

const App = () => {
  return (
    <div>
      <div>
        <Link to="/">home</Link>
        <Link to="/login">to login</Link>
        <Link to="/profile">to profile</Link>
        <Link to="/planner">to planner create</Link>
        <Link to="/explorer">to explorer</Link>
      </div>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/planner" element={<PlannerLayout />}>
          <Route index element={<Planner />} />
          <Route path=":id" element={<Planner />} />
        </Route>
        <Route path="/explorer" element={<Explorer />} />
      </Routes>
    </div>
  );
};

export default App;
