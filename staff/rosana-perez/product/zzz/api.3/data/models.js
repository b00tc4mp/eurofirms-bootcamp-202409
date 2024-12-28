/* 
En Mongoose, un model es una representación de un esquema de datos que se utiliza 
para interactuar con la base de datos MongoDB. Un modelo es responsable de la creación, 
lectura, actualización y eliminación (CRUD) de los documentos dentro de una colección 
en MongoDB, utilizando las definiciones y reglas que se han establecido previamente 
en un esquema.

Métodos Comunes de los Modelos de Mongoose:
save(): Guarda un nuevo documento en la colección.
find(): Busca documentos que coincidan con ciertos criterios.
findOne(): Encuentra un solo documento basado en una condición.
update(): Actualiza documentos existentes.
delete(): Elimina documentos de la base de datos.
countDocuments(): Cuenta los documentos que coinciden con una consulta. 

Resumen de los tipos de variables más comunes en Mongoose:
String: Cadenas de texto.
Number: Números (enteros y flotantes).
Date: Fechas.
Boolean: Valores booleanos (true o false).
Buffer: Datos binarios.
ObjectId: Identificadores únicos de MongoDB, a menudo utilizados para referenciar otros documentos.
    -> ref: se utiliza para hacer referencia a otro modelo, relacionandolos entre sí
Array: [].Arreglos de cualquier tipo de datos.
Mixed: Tipo flexible que puede almacenar cualquier tipo de valor.
Decimal128: Números decimales de alta precisión.
Map: Estructuras clave-valor.
Subdocumentos: Esquemas dentro de otros esquemas para estructuras más complejas.

*/


import { Schema, model, Types } from 'mongoose'

// const ObjectId = Types.ObjectId
const { ObjectId } = Types

const user = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 1
    },
    email: {
        type: String,
        required: true,
        minLength: 6,
        unique: true
    },
    username: {
        type: String,
        required: true,
        minLength: 4,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
    }
})

const post = new Schema({
    author: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },
    image: {
        type: String,
        required: true,
        maxLength: 1000
    },
    text: {
        type: String,
        required: true,
        maxLength: 1000
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
})

// crear el modelo:

const User = model('User', user)
const Post = model('Post', post)

export {
    User,
    Post
}