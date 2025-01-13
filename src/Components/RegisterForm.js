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
    internalExternal: 'EXTERNAL',
    mobilePhoneNumber: '',
    role: 'USER',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('lien-api/register', formData);
      console.log('Réponse de l\'API :', response.data);
      alert('Inscription réussie');
    } catch (error) {
      console.error('Erreur lors de l\'inscription :', error);
      alert('Inscription échouée');
    }
  };

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
        <div id="center_bouton">
          <button className="bouton" type="submit">S'inscrire</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
