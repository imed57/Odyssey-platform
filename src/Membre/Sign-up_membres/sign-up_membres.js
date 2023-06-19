import React from 'react'
import { useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import './sign-up_membres.css'

const SignUP = (props) => {
  const history = useHistory()

  const handleSignup = () => {
    // Effectuer l'authentification et la validation ici
    // Si la création du compte est réussie, rediriger vers la page d'accueil
    history.push('/home-membres')
  }

  const handleLogin = () => {
    // Effectuer l'authentification ici
    // Si la connexion est réussie, rediriger vers la page de l'employé
    history.push('/Signup-employé');
  }

  return (
      <div className="sign-up-sign-up">
        <div className="sign-up-sign">
          <div className="sign-up-card1">
            <div className="sign-up-button-fill1" >
              <span className="sign-up-text">
                <span >Vous étes un employé ?</span>
              </span>
              <button className="sign-up-card-seconnecter" onClick={handleLogin}>
                <span className="sign-up-text2"  >
                  <span>Se connecter</span>
                </span>
              </button>
            </div>
          </div>
          <div className="sign-up-card2">
            <div className="sign-up-title-login">
              <span className="sign-up-text4">
                <span>Login for membres</span>
              </span>
            </div>
            <input type="text" className="sign-up-name" placeholder="Name" />
            <input type="email" className="sign-up-name1" placeholder="Email" />
            <input type="password" className="sign-up-name2" placeholder="Password" />
            <input type="password" className="sign-up-name3" placeholder="Confirm Password" />
            <button className="sign-up-button-fill2" onClick={handleSignup}>
              <span className="sign-up-text6 Body01">
                <span>Sign Up</span>
              </span>
            </button>
          </div>
        </div>
      </div>

  )
}

export default SignUP
