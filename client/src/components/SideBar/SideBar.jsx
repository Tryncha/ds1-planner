import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import './Sidebar.css';
import UserInfo from '../UserInfo/UserInfo';

const Sidebar = () => {
  const { authInfo } = useContext(AuthContext);

  return (
    <nav className="Sidebar">
      <div>
        <h2>Soulsborne Planner</h2>
        <hr className="u-hr" />
      </div>
      <div className="Sidebar-mainContainer">
        <NavLink to="/" className="Sidebar-NavLink">
          Home
        </NavLink>
        <NavLink to="/profile" className="Sidebar-NavLink" end>
          Profile
        </NavLink>
        <NavLink to="/planner" className="Sidebar-NavLink">
          Planners
        </NavLink>
        <NavLink to="/explorer" className="Sidebar-NavLink">
          Explorer
        </NavLink>
      </div>
      <div className="Sidebar-container">
        <NavLink to="/" className="Sidebar-NavLink">
          Settings
        </NavLink>
        <NavLink to="/" className="Sidebar-NavLink">
          Help
        </NavLink>
      </div>
      <hr className="u-hr" />
      {authInfo.id ? (
        <UserInfo />
      ) : (
        <div className="Sidebar-container">
          <NavLink to="/login" className="Sidebar-NavLink">
            Login
          </NavLink>
          <NavLink to="/register" className="Sidebar-NavLink">
            Register
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Sidebar;
