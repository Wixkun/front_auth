import React, { useState } from 'react';
import axios from 'axios';
import './register.css'; 

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    company: '',
    department: '',
    internalExternal: '',
    mobilePhoneNumber: '',
    role: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/register', formData);
      console.log('Réponse de l\'API :', response.data);
      alert('Inscription réussie');
    } catch (error) {
      console.error('Erreur lors de l\'inscription :', error);
      alert('Inscription échouée');
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await API.get('/users');
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

  return (
    <div id="container">
  <div id="logo_valocime">
    <img
      src="https://valocime.fr/wp-content/uploads/2020/01/logo-valocime-e1654252050327.png"
      alt="Logo Valocime"
    />
  </div>
  <form id="zone_formulaire" onSubmit={handleRegister}>
    <input
      className="input"
      type="text"
      name="firstName"
      placeholder="Prénom"
      value={formData.firstName}
      onChange={handleChange}
      required
    />
    <input
      className="input"
      type="text"
      name="lastName"
      placeholder="Nom"
      value={formData.lastName}
      onChange={handleChange}
      required
    />
    <input
      className="input"
      type="email"
      name="email"
      placeholder="Email"
      value={formData.email}
      onChange={handleChange}
      required
    />
    <input
      className="input"
      type="password"
      name="password"
      placeholder="Mot de passe"
      value={formData.password}
      onChange={handleChange}
      required
    />
    <input
      className="input"
      type="text"
      name="company"
      placeholder="Entreprise"
      value={formData.company}
      onChange={handleChange}
    />
    <input
      className="input"
      type="text"
      name="department"
      placeholder="Département"
      value={formData.department}
      onChange={handleChange}
    />
    <input
      className="input"
      type="text"
      name="mobilePhoneNumber"
      placeholder="Numéro de téléphone"
      value={formData.mobilePhoneNumber}
      onChange={handleChange}
    />
    <select
      className="select"
      name="internalExternal"
      value={formData.internalExternal}
      onChange={handleChange}
      required
    >
      <option value="EXTERNAL">Externe</option>
      <option value="INTERNAL">Interne</option>
    </select>
    <select
      className="select"
      name="role"
      value={formData.role}
      onChange={handleChange}
      required
    >
      <option value="USER">Utilisateur</option>
      <option value="ADMIN">Administrateur</option>
      <option value="BANNED">Banni</option>
    </select>
    <div id="center_bouton">
      <button className="bouton" type="submit">S'inscrire</button>
    </div>
  </form>
</div>
  );
};

export default RegisterForm;
