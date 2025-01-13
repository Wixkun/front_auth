import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';

const ModifMembre = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    role: 'membre',
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await API.get('/users/me');
        const currentUser = response.data;

        if (currentUser.role !== 'admin') {
          navigate('/unauthorized');
          return;
        }

        setUser(currentUser);
      } catch (error) {
        console.error('Erreur lors de la récupération des informations utilisateur', error);
        navigate('/login');
      }
    };

    fetchUser();
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/update-member', formData);
      alert('Membre modifié avec succès');
    } catch (error) {
      console.error('Erreur lors de la modification du membre', error);
      alert('Échec de la modification');
    }
  };

  if (!user) return <p>Chargement...</p>;

  return (
    <div className="modif-container">
      <header>
        <h1>Modifier un Membre</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nom">Nom :</label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="prenom">Prénom :</label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="role">Rôle :</label>
          <select id="role" name="role" value={formData.role} onChange={handleChange}>
            <option value="membre">Membre</option>
            <option value="operateur">Opérateur</option>
            <option value="admin">Administrateur</option>
          </select>
        </div>
        <button type="submit">Modifier</button>
      </form>
    </div>
  );
};

export default ModifMembre;
