  
import React from 'react';
import ReactDOM from 'react-dom';
import SettingsContext from './components/todo/setting-context'
import App from './app.js';
import  AuthContext  from './components/todo/auth-context';
import { BrowserRouter } from "react-router-dom";

function Main (props) {
    return (
      <BrowserRouter>
      <AuthContext>
        <SettingsContext>
          <App />
        </SettingsContext>
      </AuthContext>
      </BrowserRouter>
    )
}
const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);