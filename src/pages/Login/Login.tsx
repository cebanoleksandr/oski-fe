import { ChangeEvent, useState } from 'react';
import './Login.scss';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { login } from '../../api/auth';
import { setUserAC } from '../../redux/userReducer';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const dispatch = useAppDispatch();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isFullNameTouched, setIsFullNameTouched] = useState(false);
  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);
  const [authError, setAuthError] = useState('');
  const user = useAppSelector(state => state.user.item);
  const navigate = useNavigate();
  const isDisabled = !fullName
    || !email
    || !password
    || !!nameError
    || !!emailError
    || !!passwordError;

  const loginHandler = () => {
    login(email, password, fullName)
      .then((response) => {
        if (typeof response.data === 'string') {
          setAuthError(response.data);
        } else {
          dispatch(setUserAC(response.data));
        }
      })
  }

  const onFullNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);

    if (fullName.split(' ').length > 1) {
      setNameError('');
    } else if (isFullNameTouched && !fullName) {
      setNameError('Fullname is require');
    } else if (isFullNameTouched && fullName.split(' ').length < 2) {
      setNameError('Fullname is invalid');
    }
  }

  const onFullNameBlur = () => {
    setIsFullNameTouched(true);

    if (fullName.split(' ').length > 1) {
      setNameError('');
    } else if (!fullName) {
      setNameError('Fullname is require');
    } else {
      setNameError('Fullname is invalid');
    }
  }

  const onEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (pattern.test(email)) {
      setEmailError('');
    } else if (isEmailTouched && !email) {
      setEmailError('Email is require');
    } else if (isEmailTouched && !pattern.test(email)) {
      setEmailError('Invalid email');
    }
  }

  const onEmailBlur = () => {
    setIsEmailTouched(true);
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (pattern.test(email)) {
      setEmailError('');
    } else if (!email) {
      setEmailError('Email is require');
    } else {
      setEmailError('Invalid email');
    }
  }

  const onPasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);

    if (password.length >= 6) {
      setPasswordError('');
    } else if (isPasswordTouched && !password.length) {
      setPasswordError('Password is require');
    } else if (isPasswordTouched && password.length < 6) {
      setPasswordError('Invalid password');
    }
  }

  const onPasswordBlur = () => {
    setIsPasswordTouched(true);

    if (password.length >= 6) {
      setPasswordError('');
    } else if (password.length === 0) {
      setPasswordError('Password is require');
    } else {
      setPasswordError('Invalid password');
    }
  }

  if (!!user) {
    navigate('/');
  }

  return (
    <div className="login">
      <div className="form-login bg-light">
        <h2 className="text-center mb10">Login</h2>

        <label htmlFor="full-name">Full name:</label>
        <input
          type="text"
          id="full-name"
          className={classNames({
            'invalid': !!nameError
          })}
          placeholder="Firstname and lastname"
          value={fullName}
          onChange={onFullNameHandler}
          onBlur={onFullNameBlur}
        />
        <div className="form-error text-danger">
          <small>{nameError}</small>
        </div>

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          className={classNames({
            'invalid': !!emailError
          })}
          placeholder="Email..."
          value={email}
          onChange={onEmailHandler}
          onBlur={onEmailBlur}
        />
        <div className="form-error text-danger">
          <small>{emailError}</small>
        </div>

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          className={classNames({
            'invalid': !!passwordError
          })}
          placeholder="Password..."
          value={password}
          onChange={onPasswordHandler}
          onBlur={onPasswordBlur}
        />
        <div className="form-error text-danger">
          <small>{passwordError}</small>
        </div>
        <div className="form-error text-danger">
          <small>{authError}</small>
        </div>

        <button
          className="btn btn-block btn-primary"
          onClick={loginHandler}
          disabled={isDisabled}
        >
          Login
        </button>
      </div>
    </div>
  );
}
