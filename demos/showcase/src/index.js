import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme, MuiThemeProvider, CssBaseline } from '@material-ui/core';
import * as PXBThemes from '@pxblue/react-themes';
import './index.css';
import { MainRouter } from './router';
import { store } from './store';
require('typeface-open-sans');

const renderApp = () =>
    ReactDOM.render(
        <MuiThemeProvider theme={createMuiTheme(store.getState() === 'light' ? PXBThemes.blue : PXBThemes.blueDark)}>
            <CssBaseline />
            <MainRouter />
        </MuiThemeProvider>,
        document.getElementById('root')
    );

renderApp();
store.subscribe(renderApp);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
