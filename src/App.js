import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';
import PageMembre from './Components/PageMembre';
import PageCollaborateur from './Components/PageCollaborateur';
import ModifMembre from './Components/ModifMembre';
import ModifCollaborateur from './Components/ModifCollaborateur';
import RequireAuth from './Security/RequireAuth';

const NotFound = () => <h1>404 - Page non trouvée</h1>;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route
          path="/membre"
          element={
            <RequireAuth>
              <PageMembre />
            </RequireAuth>
          }
        />
        <Route
          path="/collaborateur"
          element={
            <RequireAuth>
              <PageCollaborateur />
            </RequireAuth>
          }
        />
        <Route
          path="/modif-membre"
          element={
            <RequireAuth>
              <ModifMembre />
            </RequireAuth>
          }
        />
        <Route
          path="/modif-collaborateur"
          element={
            <RequireAuth>
              <ModifCollaborateur />
            </RequireAuth>
          }
        />
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
