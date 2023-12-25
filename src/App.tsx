import React, { useEffect, useState } from 'react';
import './App.scss';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Outlet, useNavigate } from 'react-router-dom';
import { SideMenu } from './components/SideMenu/SideMenu';
import { BackDrop } from './components/BackDrop/BackDrop';
import { useAppSelector } from './redux/hooks';
import { initUser } from './api/auth';
import { useDispatch } from 'react-redux';
import { setUserAC } from './redux/userReducer';

export const App = () => {
  const user = useAppSelector(state => state.user.item);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    initUser()
      .then((response) => {
        dispatch(setUserAC(response.data));
      })
  }, []);

  const onClose = () => {
    if (!user) {
      navigate('/contacts');
      return;
    }

    setIsOpen(true)
  }

  return (
    <div className="app">
      <Header onOpen={onClose} />
      
      <main className="container">
        <Outlet />
      </main>

      <SideMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />

      {isOpen && (
        <BackDrop onClick={() => setIsOpen(false)} />
      )}
      
      <Footer />
    </div>
  );
}
