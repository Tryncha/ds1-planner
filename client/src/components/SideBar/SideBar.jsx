import { Link, useNavigate } from 'react-router-dom';
import './SideBar.css';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import { generateAnonymousSession } from '../../services/anonymousSession';

const SideBar = () => {
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);

  function handleLogout() {
    window.localStorage.clear();
    generateAnonymousSession();
    navigate('/');
    window.location.reload();
  }

  return (
    <nav className="SideBar">
      <div className="SideBar-container">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/planner/dark-souls-1">Planner DS1</Link>
        <Link to="/planner/dark-souls-2">Planner DS2</Link>
        <Link to="/explorer">Explorer</Link>
      </div>
      {auth.username ? (
        <div>
          <strong>{auth.username}</strong>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
};

export default SideBar;
