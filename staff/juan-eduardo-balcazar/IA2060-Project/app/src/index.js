import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'; // Importa el componente principal

// Renderiza el componente App dentro del elemento con id "root" en index.html
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root') // Asegúrate de tener un elemento <div id="root"></div> en index.html
);
