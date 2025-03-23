import { useEffect, useId, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginService from '../../../services/login';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();
  const usernameInputId = useId();
  const passwordInputId = useId();
  const confirmPasswordInputId = useId();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });

  const [formErrors, setFormErrors] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });

  const [isFormValid, setIsFormValid] = useState(true);

  useEffect(() => {
    // This validation prevents the browser from sending error messages to the user.
    setIsFormValid(true);
    setFormErrors({
      username: '',
      password: '',
      confirmPassword: ''
    });

    if (0 < formData.username.length && formData.username.length < 3) {
      setIsFormValid(false);
      setFormErrors((prevState) => {
        return { ...prevState, username: 'username must have at least 3 characters' };
      });
    }

    if (formData.password.length > 0) {
      if (formData.password.length < 8) {
        setIsFormValid(false);
        setFormErrors((prevState) => {
          return { ...prevState, password: 'password must have at least 8 characters' };
        });
      }

      if (!/[A-Z]/.test(formData.password)) {
        setIsFormValid(false);
        setFormErrors((prevState) => {
          return { ...prevState, password: 'password must have at least 1 uppercase letter' };
        });
      }

      if (!/\d/.test(formData.password)) {
        setIsFormValid(false);
        setFormErrors((prevState) => {
          return { ...prevState, password: 'password must have at least 1 digit' };
        });
      }
    }

    if (formData.password !== formData.confirmPassword) {
      setIsFormValid(false);
      setFormErrors((prevState) => {
        return { ...prevState, confirmPassword: "passwords don't match" };
      });
    }
  }, [formData]);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleCancelClick(event) {
    event.preventDefault();
    navigate('/');
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (formData.password === formData.confirmPassword) {
      try {
        const registerDataClone = { ...formData };
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

  return (
    <main className="u-mainPage">
      <h2>Register</h2>
      <hr className="u-hr" />
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
          <span className="u-formError">{formErrors.username}</span>
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
          <span className="u-formError">{formErrors.password}</span>
        </div>
        <div className="u-authFormContainer">
          <label htmlFor={confirmPasswordInputId}>Confirm password</label>
          <input
            id={confirmPasswordInputId}
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <span className="u-formError">{formErrors.confirmPassword}</span>
        </div>
        <div className="u-authButtonsContainer">
          <button type="submit" disabled={!isFormValid}>
            Register
          </button>
          <button onClick={handleCancelClick}>Cancel</button>
        </div>
      </form>
    </main>
  );
};

export default Register;
