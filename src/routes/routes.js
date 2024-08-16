const { Router } = require('express');
const { getDescriptions, createDescription, updateDescriptionById, getDescriptionById } = require('../controllers/description.controller');
const { register, login } = require('../controllers/auth.controller');
const { getContacts, createContact } = require('../controllers/contact.controller');
const { createProduct, getAllProducts, getProductById, updateProductComplete, actualizarProductoPorReferencia, getProductByArancelId, getProductByReference } = require('../controllers/product.controller');

const router = Router()

// registro y usuario de login

router.post('/auth/login/', login);
router.post('/auth/register/', register);

//Contactos
router.get('/contacts/',getContacts);
router.post('/contacts/',createContact);

//Descripción de producto
router.get( '/descriptions/', getDescriptions );
router.get( '/descriptions/:id', getDescriptionById );
router.post( '/descriptions/', createDescription );
router.patch( '/descriptions/:id', updateDescriptionById );

//Ruta de producto 
router.post( '/products/', createProduct );           // Crea Producto
router.get( '/products/', getAllProducts );   // Obtenemos todos Productos
router.get( '/products/:id', getProductById); // Obtenemos producto por Id
router.patch( '/products/:id', updateProductComplete);
router.patch( '/products/reference/:id', actualizarProductoPorReferencia );
router.get( '/products/paid/:id', getProductByArancelId );
router.get( '/products/reference/:PosArancelId', getProductByReference );




module.exports = router