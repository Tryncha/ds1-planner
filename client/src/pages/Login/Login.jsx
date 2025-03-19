import { useContext, useId, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginService from '../../services/login';
import buildService from '../../services/builds';
import AuthContext from '../../context/AuthContext';
import { clearAnonymousSession } from '../../services/anonymousSession';

const Login = () => {
  const navigate = useNavigate();
  const usernameInputId = useId();
  const passwordInputId = useId();

  const { setAuthInfo } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleCancelClick(event) {
    event.preventDefault();
    navigate('/');
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const userInfo = await loginService.login({ username, password });

      window.localStorage.setItem('userInfo', JSON.stringify(userInfo));

      clearAnonymousSession();
      buildService.setToken(userInfo.token);
      setAuthInfo(userInfo);

      navigate('/');
    } catch (error) {
      console.log('Wrong credentials:', error);
    }
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor={usernameInputId}>Username</label>
          <input id={usernameInputId} type="text" value={username} onChange={handleUsernameChange} required />
        </div>
        <div>
          <label htmlFor={passwordInputId}>Password</label>
          <input id={passwordInputId} type="password" value={password} onChange={handlePasswordChange} required />
        </div>
        <button type="submit">Login</button>
        <button onClick={handleCancelClick}>Cancel</button>
      </form>
    </main>
  );
};

export default Login;
