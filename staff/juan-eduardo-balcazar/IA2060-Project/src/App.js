// import React from 'react';

// function App() {
//     return (
//         <div>
//             <h1>Bienvenido a IA2060</h1>
//             <p>Con esta App podremos vincular Comerciales, Proveedores y Clientes.</p>
//         </div>
//     );
// }

// export default App;

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
        type: String,
        enum: ['comercial', 'administrador', 'proveedor', 'cliente'],
        required: true
    }
});

const User = mongoose.model('User', userSchema);

// export default User;

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from './models/User.js';

// Ruta para registrar un nuevo usuario
app.post('/register', async (req, res) => {
    const { username, password, role } = req.body;

    // Validar el rol
    if (!['comercial', 'administrador', 'proveedor', 'cliente'].includes(role)) {
        return res.status(400).json({ message: 'Rol no válido' });
    }

    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ username });
    if (existingUser) {
        return res.status(400).json({ message: 'Usuario ya existe' });
    }

    // Hashear la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear el nuevo usuario
    const user = new User({
        username,
        password: hashedPassword,
        role
    });

    await user.save();
    res.status(201).json({ message: 'Usuario creado correctamente' });
});

// Ruta para iniciar sesión
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // Buscar al usuario
    const user = await User.findOne({ username });
    if (!user) {
        return res.status(400).json({ message: 'Usuario no encontrado' });
    }

    // Verificar la contraseña
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        return res.status(400).json({ message: 'Contraseña incorrecta' });
    }

    // Crear un token JWT
    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});

const contactSchema = new mongoose.Schema({
    companyName: String,
    contactPerson: String,
    phoneNumber: String,
    email: String,
    community: String,
    country: String,
    contactDate: Date,
    nextContactDate: Date,
    comments: String
});

const Contact = mongoose.model('Contact', contactSchema);

// export default Contact;

import Contact from './models/Contact.js';
import jwt from 'jsonwebtoken';

// Middleware para verificar el JWT y rol
function verifyAdmin(req, res, next) {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Acceso no autorizado' });

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).json({ message: 'Token no válido' });
        if (decoded.role !== 'administrador') {
            return res.status(403).json({ message: 'Acceso solo permitido a administradores' });
        }
        req.user = decoded;
        next();
    });
}

// Ruta para agregar contacto
app.post('/add-contact', verifyAdmin, async (req, res) => {
    const { companyName, contactPerson, phoneNumber, email, community, country, contactDate, nextContactDate, comments } = req.body;

    const newContact = new Contact({
        companyName,
        contactPerson,
        phoneNumber,
        email,
        community,
        country,
        contactDate,
        nextContactDate,
        comments
    });

    await newContact.save();
    res.status(201).json({ message: 'Contacto añadido correctamente' });
});

import React, { useState } from 'react';
import axios from 'axios';

function AddContact() {
    const [contactData, setContactData] = useState({
        companyName: '',
        contactPerson: '',
        phoneNumber: '',
        email: '',
        community: '',
        country: '',
        contactDate: '',
        nextContactDate: '',
        comments: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContactData({
            ...contactData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem('token');
            await axios.post('http://localhost:8080/add-contact', contactData, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert('Contacto añadido con éxito');
        } catch (err) {
            alert('Error al agregar contacto');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="companyName" placeholder="Nombre de la empresa" onChange={handleChange} value={contactData.companyName} />
            <input type="text" name="contactPerson" placeholder="Persona de contacto" onChange={handleChange} value={contactData.contactPerson} />
            <input type="text" name="phoneNumber" placeholder="Número de teléfono" onChange={handleChange} value={contactData.phoneNumber} />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} value={contactData.email} />
            <input type="text" name="community" placeholder="Comunidad" onChange={handleChange} value={contactData.community} />
            <input type="text" name="country" placeholder="País" onChange={handleChange} value={contactData.country} />
            <input type="date" name="contactDate" onChange={handleChange} value={contactData.contactDate} />
            <input type="date" name="nextContactDate" onChange={handleChange} value={contactData.nextContactDate} />
            <textarea name="comments" placeholder="Comentarios" onChange={handleChange} value={contactData.comments}></textarea>
            <button type="submit">Añadir contacto</button>
        </form>
    );
}

// export default AddContact;

const comentarioSchema = new mongoose.Schema({
    texto: { type: String, required: true },
    privado: { type: Boolean, default: false },
    fecha: { type: Date, default: Date.now },
});

const contactoSchema = new mongoose.Schema({
    empresa: { type: String, required: true },
    personaContacto: { type: String, required: true },
    telefono: { type: String, required: true },
    email: { type: String, required: true },
    comunidad: { type: String },
    pais: { type: String },
    fechaContacto: { type: Date, default: Date.now },
    fechaProximoContacto: { type: Date },
    comentarios: [comentarioSchema],  // Aquí agregas los comentarios
});

const Contacto = mongoose.model('Contacto', contactoSchema);

// Ruta para obtener los contactos
router.get('/', async (req, res) => {
    try {
        const contactos = await Contacto.find();
        const isAdmin = req.user && req.user.role === 'admin';

        if (!isAdmin) {
            contactos.forEach(contacto => {
                contacto.comentarios = contacto.comentarios.filter(comentario => !comentario.privado);
            });
        }

        res.json(contactos);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener los contactos');
    }
});

// Ruta para agregar comentarios privados (solo admin)
router.post('/:contactoId/comentarios', verificarAdmin, async (req, res) => {
    const { contactoId } = req.params;
    const { texto, privado } = req.body;

    try {
        const contacto = await Contacto.findById(contactoId);
        if (!contacto) {
            return res.status(404).send('Contacto no encontrado');
        }

        const nuevoComentario = { texto, privado };
        contacto.comentarios.push(nuevoComentario);
        await contacto.save();
        res.status(200).json(contacto);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al agregar el comentario');
    }
});

import React, { useEffect, useState } from 'react';

function Contactos() {
    const [contactos, setContactos] = useState([]);
    const [esAdmin, setEsAdmin] = useState(false);  // Puedes obtener esto desde el estado global

    useEffect(() => {
        async function fetchContactos() {
            const response = await fetch('http://localhost:8080/contactos');
            const data = await response.json();
            setContactos(data);
        }
        fetchContactos();
    }, []);

    return (
        <div>
            <h1>Contactos</h1>
            {contactos.map(contacto => (
                <div key={contacto._id}>
                    <h2>{contacto.empresa}</h2>
                    <p>{contacto.personaContacto}</p>
                    <ul>
                        {contacto.comentarios.map((comentario, index) => (
                            (comentario.privado && esAdmin) || !comentario.privado ? <li key={index}>{comentario.texto}</li> : null
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Contactos;










<><div className="bg-blue-500 text-white p-4">
    <h1 className="text-3xl font-bold text-center">Bienvenido a IA2060</h1>
    <p className="text-center">Con esta App podrás vincular Comerciales, Proveedores y Clientes.</p>
</div><div className="flex justify-between items-center p-4">
        <button
            className="bg-red-500 text-black p-2 rounded hover:bg-red-700 transition-colors"
        >
            Retroceder
        </button>
        <button
            className="bg-green-500 text-black p-2 rounded hover:bg-green-700 transition-colors"
        >
            Adelantar
        </button>
    </div><div className="bg-blue-500 text-white p-4 mt-4">
        <footer className="text-center">
            <p>Pie de página</p>
        </footer>
    </div></>
