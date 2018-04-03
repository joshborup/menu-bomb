import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<BrowserRouter>    
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <App />
    </MuiThemeProvider>
</BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
