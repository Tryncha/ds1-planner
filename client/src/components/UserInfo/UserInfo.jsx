import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import { generateAnonymousUserId } from '../../services/anonymousUserId';
import { useNavigate } from 'react-router-dom';
import './UserInfo.css';

const UserInfo = () => {
  const navigate = useNavigate();
  const { authInfo, setAuthInfo } = useContext(AuthContext);

  function handleLogout() {
    window.localStorage.clear();
    setAuthInfo(null);
    generateAnonymousUserId();
    navigate('/');
    window.location.reload();
  }

  return (
    <div className="UserInfo">
      <div className="UserInfo-data">
        <strong>{authInfo.username}</strong>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserInfo;
