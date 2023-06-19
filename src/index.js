import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Homeemployé from './Employé/Home-employé/Home-employé'
import Homemembre from './Membre/Home-membres/home-membres'
import AvailableBooks from './Home/bibliothéque/AvailableBook/AvailableBooks'
import BooksToReturn from './Home/bibliothéque/BooksToReturn/BooksToReturn'

import Ajouterlivre from './Employé/Ajouter_Un_Livre/Ajouter_Un_Livre'
import Gererlesprets from './Employé/Gérer_Les_prêts/Gerer_Les_prêts'

const App = () => {
  return (
    <Router>
        <Route path="/home-employé" component={Homeemployé} />
        <Route path="/home-membres" component={Homemembre} />
        <Route path="/available-books" component={AvailableBooks} />
        <Route path="/books-to-return" component={BooksToReturn} />

        <Route path="/ajouter-livre" component={Ajouterlivre} />
        <Route path="/gerer-prets" component={Gererlesprets} />


    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))