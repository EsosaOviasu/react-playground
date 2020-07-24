import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
//import App from './paltrows-power-toes/src/paltrows-toes/App';
import './index.css';
import AppLang from './lang-context/AppLang';
import HellowWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';
import DemonynApp from './demonymapp/demonymApp'; //Not Working//
import RegistrationForm from './registrationForm/registrationForm';
import App from './playingwithdanger/App';

ReactDOM.render(
    <App />,
    document.getElementById('root'));