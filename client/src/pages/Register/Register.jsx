import { useId, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginService from '../../services/login';

const Register = () => {
  const navigate = useNavigate();
  const usernameInputId = useId();
  const passwordInputId = useId();
  const confirmPasswordInputId = useId();

  const [registerData, setRegisterData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setRegisterData((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleCancelClick(event) {
    event.preventDefault();
    navigate('/');
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (registerData.password === registerData.confirmPassword) {
      try {
        const registerDataClone = { ...registerData };
        delete registerDataClone.confirmPassword;

        await loginService.register(registerDataClone);

        navigate('/');
      } catch (error) {
        console.log('Wrong credentials:', error);
      }
    } else {
      console.log("Passwords don't match!");
    }
  }

  console.log('RegisterData:', registerData);

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor={usernameInputId}>Username</label>
          <input
            id={usernameInputId}
            name="username"
            type="text"
            value={registerData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor={passwordInputId}>Password</label>
          <input
            id={passwordInputId}
            name="password"
            type="password"
            value={registerData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor={confirmPasswordInputId}>Confirm password</label>
          <input
            id={confirmPasswordInputId}
            name="confirmPassword"
            type="password"
            value={registerData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
        <button onClick={handleCancelClick}>Cancel</button>
      </form>
    </main>
  );
};

export default Register;
