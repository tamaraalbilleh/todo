  
import React from 'react';
import ReactDOM from 'react-dom';
import SettingsContext from './components/todo/setting-context'
import App from './app.js';
function Main (props) {
    return (
      <SettingsContext>
        <App />
      </SettingsContext>
    )
}
const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);