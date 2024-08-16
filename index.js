/* console.log ('Hola') */

const express = require( 'express' );       // Importamos express
const app = express();                      // Invocamos express
const cors = require( 'cors' );

const {dbConnection} = require('./config/mongo.config.js');  // Importamos la configuracion de Mongoose para MongoDB
require("dotenv").config()
const PORT = process.env.PORT

app.use( express.json() );
app.use( cors() ); 

// /* / Definimos las rutas disponibles */ 
// app.use( '/api/auth', require( './routes/auth.routes')) ya esta
// app.use( '/api/products', require( './routes/product.routes' ) );       
// app.use( '/api/descriptions', require( './routes/description.routes'))
// app.use( '/api/contacts',require('./routes/contact.routes'));

app.use('/api', require('./src/routes/routes.js'))
app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        msg:'api is healthy'
    })
})
// Invoca la configuracion de la base de datos para establecer la conexion
dbConnection();

/* / Lanzamos el servidor web */
app.listen( PORT||4003, function() {
    console.log(`servidor corriendo en http://localhost:${PORT}`);
});
