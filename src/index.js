import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { GlobalStyles } from './global-styles'

const root = createRoot(document.getElementById('root'));
root.render(
    <> 

    <GlobalStyles/> 
    <App/>

    </>  
);


