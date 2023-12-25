import React, { useEffect } from 'react';
import './Header.scss';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setQueryAC } from '../../redux/searchReducer';
import { getAll } from '../../api/tests';
import { setTestsAC } from '../../redux/testsReducer';

type Props = {
  onOpen: () => void;
}

export const Header: React.FC<Props> = ({ onOpen }) => {
  const user = useAppSelector(state => state.user.item);
  const query = useAppSelector(state => state.search.query);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    getAll()
      .then((response) => {
        dispatch(setTestsAC(response.data));
      })
      .catch(() => {})
      .finally(() => {})
  }, []);

  const loginHandler = () => {
    navigate('/login');
  }

  return (
    <header className="header bg-primary">
      <div className="header-container">
        <div className="logo" onClick={onOpen}>
          <i className="fa fa-bars"></i>
        </div>

        <div className="input-container">
          <input
            type="search"
            placeholder="Find tasks..."
            className="header-input"
            value={query}
            onChange={(e) => dispatch(setQueryAC(e.target.value))}
          />
        </div>

        {!user ? (
          <button
            className="btn btn-light"
            onClick={loginHandler}
          >
            Login
          </button>
        ) : (
          <p>
            Welcome, {user.fullName}!
          </p>
        )}
      </div>
    </header>
  );
}
