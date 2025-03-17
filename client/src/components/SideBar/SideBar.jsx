import { Link } from 'react-router-dom';
import './SideBar.css';

const SideBar = () => {
  return (
    <nav className="SideBar">
      <div className="SideBar-container">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/planner/darksouls1">Planner DS1</Link>
        <Link to="/planner/darksouls2">Planner DS2</Link>
        <Link to="/explorer">Explorer</Link>
      </div>
      <Link to="/login">Login</Link>
    </nav>
  );
};

export default SideBar;
