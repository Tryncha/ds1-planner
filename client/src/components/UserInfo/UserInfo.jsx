import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './UserInfo.css';
import Button from '../Button/Button';

const UserInfo = () => {
  const navigate = useNavigate();
  const { authInfo } = useContext(AuthContext);

  function handleLogout() {
    window.localStorage.clear();

    navigate('/');
    window.location.reload();
  }

  return (
    <div className="UserInfo">
      <div className="UserInfo-data">
        <strong>{authInfo.username}</strong>
      </div>
      <Button onClick={handleLogout} modifier="danger">
        Logout
      </Button>
    </div>
  );
};

export default UserInfo;
