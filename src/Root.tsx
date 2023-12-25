import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { Contacts } from './pages/Contacts/Contacts';
import { ActiveTests } from './pages/ActiveTests/ActiveTests';
import { CompletedTests } from './pages/CompletedTests/CompletedTests';
import { TestPage } from './pages/TestPage/TestPage';

export const Root: React.FC = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="active-tests" element={<ActiveTests />} />
        <Route path="completed-tests" element={<CompletedTests />} />
        <Route path="tests/:testId" element={<TestPage />} />
      </Route>
      
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </HashRouter>
);
