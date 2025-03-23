import { useContext, useId, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginService from '../../../services/login';
import buildService from '../../../services/builds';
import AuthContext from '../../../context/AuthContext';
import { clearAnonymousUserId } from '../../../services/anonymousUserId';

const Login = () => {
  const navigate = useNavigate();
  const usernameInputId = useId();
  const passwordInputId = useId();

  const { setAuthInfo } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [formError, setFormError] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  function handleCancelClick(event) {
    event.preventDefault();
    navigate('/');
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const userInfo = await loginService.login(formData);

      window.localStorage.setItem('userInfo', JSON.stringify(userInfo));

      clearAnonymousUserId();
      buildService.setToken(userInfo.token);
      setAuthInfo(userInfo);

      navigate('/');
    } catch (error) {
      console.error(error.message);
      setFormError('Wrong username or password');
    }
  }

  return (
    <main className="u-mainPage">
      <h2>Login</h2>
      <hr className="u-hr" />
      <span className="u-formError">{formError}</span>
      <form onSubmit={handleSubmit}>
        <div className="u-authFormContainer">
          <label htmlFor={usernameInputId}>Username</label>
          <input
            id={usernameInputId}
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="u-authFormContainer">
          <label htmlFor={passwordInputId}>Password</label>
          <input
            id={passwordInputId}
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="u-authButtonsContainer">
          <button type="submit">Login</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </div>
      </form>
    </main>
  );
};

export default Login;
