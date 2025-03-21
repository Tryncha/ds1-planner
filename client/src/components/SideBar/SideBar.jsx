import { Link } from 'react-router-dom';
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
        <Link to="/" className="Sidebar-Link">
          Home
        </Link>
        <Link to="/profile" className="Sidebar-Link">
          Profile
        </Link>
        <Link to="/planner/dark-souls-1" className="Sidebar-Link">
          Planner DS1
        </Link>
        <Link to="/planner/dark-souls-2" className="Sidebar-Link">
          Planner DS2
        </Link>
        <Link to="/explorer" className="Sidebar-Link">
          Explorer
        </Link>
      </div>
      <div className="Sidebar-container">
        <Link to="/" className="Sidebar-Link">
          Settings
        </Link>
        <Link to="/profile" className="Sidebar-Link">
          Help
        </Link>
      </div>
      <hr className="u-hr" />
      {authInfo.id ? (
        <UserInfo />
      ) : (
        <div className="Sidebar-container">
          <Link to="/login" className="Sidebar-Link">
            Login
          </Link>
          <Link to="/register" className="Sidebar-Link">
            Register
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Sidebar;
