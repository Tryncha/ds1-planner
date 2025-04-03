import { useContext, useEffect, useId, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginService from '../../../services/login';
import './Register.css';
import Button from '../../../components/Button/Button';
import { clearAnonymousUserId } from '../../../services/anonymousUserId';
import AuthContext from '../../../context/AuthContext';
import buildService from '../../../services/builds';

const Register = () => {
  const navigate = useNavigate();
  const usernameInputId = useId();
  const passwordInputId = useId();
  const confirmPasswordInputId = useId();

  const { setAuthInfo } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });

  const [formErrors, setFormErrors] = useState({
    username: '',
    password: [],
    confirmPassword: ''
  });

  const [isFormValid, setIsFormValid] = useState(true);

  useEffect(() => {
    // This validation prevents the browser from sending error messages to the user.
    setIsFormValid(true);
    setFormErrors({
      username: '',
      password: [],
      confirmPassword: ''
    });

    if (0 < formData.username.length && formData.username.length < 3) {
      setIsFormValid(false);
      setFormErrors((prevState) => {
        return { ...prevState, username: 'username must have at least 3 characters' };
      });
    }

    if (formData.password.length > 0) {
      const passwordErrors = [];

      if (formData.password.length < 8) {
        setIsFormValid(false);
        // setFormErrors((prevState) => {
        //   return { ...prevState, password: 'password must have at least 8 characters' };
        // });
        passwordErrors.push({ id: 1, error: 'password must have at least 8 characters' });
      }

      if (!/[A-Z]/.test(formData.password)) {
        setIsFormValid(false);
        // setFormErrors((prevState) => {
        //   return { ...prevState, password: 'password must have at least 1 uppercase letter' };
        // });
        passwordErrors.push({ id: 2, error: 'password must have at least 1 uppercase letter' });
      }

      if (!/\d/.test(formData.password)) {
        setIsFormValid(false);
        // setFormErrors((prevState) => {
        //   return { ...prevState, password: 'password must have at least 1 digit' };
        // });
        passwordErrors.push({ id: 3, error: 'password must have at least 1 digit' });
      }

      setFormErrors((prevState) => {
        return { ...prevState, password: passwordErrors };
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
        setFormData({
          username: '',
          password: '',
          confirmPassword: ''
        });

        const loginForm = { ...formData };
        delete loginForm.confirmPassword;

        const userInfo = await loginService.login(loginForm);

        window.localStorage.setItem('userInfo', JSON.stringify(userInfo));

        clearAnonymousUserId();
        buildService.setToken(userInfo.token);
        setAuthInfo(userInfo);

        navigate('/');
      } catch (error) {
        console.error({ error: error.message });
      }
    } else {
      setIsFormValid(false);
      setFormErrors((prevState) => {
        return { ...prevState, confirmPassword: "passwords don't match" };
      });
    }
  }

  return (
    <main className="u-mainPage">
      <h2>Register</h2>
      <hr className="u-hr" />
      <div className="u-info">
        <p>
          Registration is not required to use this app, you will be using an <strong>anonymous session</strong>,
          allowing you to:
        </p>
        <ul>
          <li>View and vote on other users' builds.</li>
          <li>
            Save, edit and share your own builds,{' '}
            <strong>but they are only kept for 30 days from the date they are created</strong>.
          </li>
          <p>This is ideal if you just want to test the app or have an automatic clean up.</p>
        </ul>
        <p>
          If you register an account, <strong>your builds will be permanent</strong>.
        </p>
      </div>
      <hr className="u-hr" />
      <form className="u-authForm" onSubmit={handleSubmit}>
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
          {formErrors.password.length > 0 &&
            formErrors.password.map((err) => (
              <span key={err.id} className="u-formError">
                {err.error}
              </span>
            ))}
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
        <Link to="/login">You already have an accout? Log In</Link>
        <div className="u-authButtonsContainer">
          <Button modifier="success" type="submit" disabled={!isFormValid}>
            Register
          </Button>
          <Button onClick={handleCancelClick} modifier="warning">
            Cancel
          </Button>
        </div>
      </form>
    </main>
  );
};

export default Register;
