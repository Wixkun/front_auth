import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';
import './member.css';

const PageCollaborateur = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await API.get('/users/me');
        setUser(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des informations utilisateur', error);
        navigate('/login'); 
      }
    };

    fetchUser();
  }, [navigate]);

  if (!user) return <p>Chargement...</p>;

  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Bienvenue Collaborateur, {user.firstName}</h1>
      </header>
      <section className="info-section">
        <h2>Informations spécifiques aux collaborateurs</h2>
        <ul>
          <li><strong>Nom :</strong> {user.lastName}</li>
          <li><strong>Email :</strong> {user.email}</li>
          <li><strong>Rôle :</strong> {user.role}</li>
        </ul>
      </section>
      <footer className="page-footer">
        <button onClick={() => navigate('/logout')} className="logout-button">Déconnexion</button>
      </footer>
    </div>
  );
};

export default PageCollaborateur;
