import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import './login.css'; 

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/login', { email, password });
      Cookies.set('authToken', response.data.token, { secure: true, sameSite: 'Strict' });
      alert('Connexion réussie');
    } catch (error) {
      console.error('Erreur lors de la connexion :', error);
      alert('Échec de la connexion');
    }
  };

  return (
    <div className="login-container">
      <header>
        <nav>
          <div id="placement_logo">
            <img
              id="logo"
              src="https://zupimages.net/up/22/25/i9e1.png"
              alt="Logo de l'application"
            />
          </div>
        </nav>
      </header>

      <section id="container">
        <div id="logo_valocime">
          <img
            src="https://valocime.fr/wp-content/uploads/2020/01/logo-valocime-e1654252050327.png"
            alt="Logo Valocime"
          />
        </div>

        <article id="zone_formulaire">
          <form onSubmit={handleLogin}>
            <div>
              <img className="icone" src="https://zupimages.net/up/22/25/vs2i.png" alt="Icone connexion" />
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <img className="icone cadenas" src="https://zupimages.net/up/22/25/c5aa.png" alt="Icone cadenas" />
              <input
                className="input"
                type="password"
                name="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div id="center_bouton">
              <button className="bouton" type="submit">Connexion</button>
            </div>
          </form>
        </article>
      </section>
    </div>
  );
};

export default LoginForm;
