const mongoose = require( 'mongoose' );
const dotenv = require('dotenv')
dotenv.config();

async function dbConnection() {
    try {
        await mongoose.connect( "mongodb+srv://lcampos-bit:admin@clusterlaura.duej3g5.mongodb.net/claaran", {} );
        console.log( 'Base de datos inicializada exitosamente' );
    } 
    catch (error) {
        console.log( error );
        // throw new Error( 'Error al inicializar la base de datos' );
    }
}

module.exports = {
    dbConnection
};