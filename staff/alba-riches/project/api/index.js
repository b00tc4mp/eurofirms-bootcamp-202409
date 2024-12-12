// Carga de variables de entorno
import 'dotenv/config';  // Carga las variables de entorno de .env

// Módulos de terceros
import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';

// Módulos internos
import { errors } from 'com';  // Asegúrate de que la ruta a 'com' sea correcta
const {
    ValidationError,
    DuplicityError,
    SystemError,
    CredentialsError,
    NotFoundError,
    OwnershipError
} = errors;

// Lógica de la aplicación
import registerUser from './logic/registerUser.js';
import authenticateUser from './logic/authenticateUser.js';
import getUserName from './logic/getUserName.js';
import getPosts from './logic/getProduct.js';
import createProduct from './logic/createProduct.js';
import deleteProduct from './logic/deleteProduct.js';
