import React, { useState } from 'react';

const RoleSelector = () => {
    const [selectedRole, setSelectedRole] = useState('');

    const handleRoleChange = (event) => {
        setSelectedRole(event.target.value);
    };

    const handleSubmit = () => {
        if (selectedRole) {
            alert(`Rol seleccionado: ${selectedRole}`);
            // Aquí puedes redirigir o guardar la selección del usuario
        } else {
            alert('Por favor, selecciona un rol.');
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Selecciona tu Rol</h1>
            <select value={selectedRole} onChange={handleRoleChange} style={{ padding: '10px', fontSize: '16px' }}>
                <option value="">-- Selecciona un rol --</option>
                <option value="comercial">Comercial</option>
                <option value="proveedor">Proveedor</option>
                <option value="cliente">Cliente</option>
                <option value="administrador">Administrador</option>
            </select>
            <br />
            <button
                onClick={handleSubmit}
                style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                }}
            >
                Confirmar Rol
            </button>
        </div>
    );
};

export default RoleSelector;
