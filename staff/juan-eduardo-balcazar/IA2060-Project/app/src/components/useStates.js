import React, { useState } from 'react';

function App() {
    const [screen, setScreen] = useState('welcome'); // Estado inicial: pantalla de bienvenida

    const handleStart = () => {
        setScreen('roles'); // Cambia a la pantalla de roles
    };

    return (
        <div>
            {screen === 'welcome' && (
                <div>
                    <h1>Bienvenido</h1>
                    <button onClick={handleStart}>Comenzar</button>
                </div>
            )}

            {screen === 'roles' && (
                <div>
                    <h1>Selecciona tu Rol</h1>
                    <ul>
                        <li>Comercial</li>
                        <li>Proveedor</li>
                        <li>Cliente</li>
                        <li>Administrador</li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default App;
