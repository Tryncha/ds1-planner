import { useId, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginService from '../services/login';
import buildsService from '../services/builds';

const Login = () => {
  const navigate = useNavigate();
  const usernameInputId = useId();
  const passwordInputId = useId();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [_user, setUser] = useState(null);

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
      const loggedUser = await loginService.login({ username, password });

      window.localStorage.setItem('loggedUser', JSON.stringify(loggedUser));

      buildsService.setToken(loggedUser.token);
      setUser(loggedUser);
    } catch (error) {
      console.log('Wrong credentials:', error);
    }
  }

  return (
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
  );
};

export default Login;
