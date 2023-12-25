import React from 'react';
import cn from 'classnames';
import './SideMenu.scss';
import { NavLink } from 'react-router-dom';
import { logout } from '../../api/auth';
import { useAppDispatch } from '../../redux/hooks';
import { setUserAC } from '../../redux/userReducer';

type Props = {
  isOpen: boolean;
  onClose: () => void;
}

export const SideMenu: React.FC<Props> = ({ isOpen, onClose }) => {
  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    `nav__link ${isActive ? 'is-active' : ''} `;
  const dispatch = useAppDispatch();

  const logoutHandler = () => {
    logout();
    dispatch(setUserAC(null));
  }

  return (
    <div className={cn('side-menu', {
      'open': isOpen
    })}>
      <div className="close-container bg-danger" onClick={onClose}>
        <i className="fa fa-close"></i>
      </div>
      
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item" onClick={onClose}>
            <NavLink to="/" className={getLinkClass}>
              Home
            </NavLink>
          </li>

          <li className="nav__item" onClick={onClose}>
            <NavLink to="/active-tests" className={getLinkClass}>
              Active tests
            </NavLink>
          </li>

          <li className="nav__item" onClick={onClose}>
            <NavLink to="/completed-tests" className={getLinkClass}>
              Completed tests
            </NavLink>
          </li>

          <li className="nav__item mb10" onClick={onClose}>
            <NavLink to="/contacts" className={getLinkClass}>
              Contacts
            </NavLink>
          </li>

          <li className="nav__item" onClick={onClose}>
            <button className="btn btn-link logout-btn" onClick={logoutHandler}>
              Log out
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
