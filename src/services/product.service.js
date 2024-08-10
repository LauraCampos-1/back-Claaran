const ProductModel = require ('../models/Product.js')

async function insertarProducto (product) {
    return await ProductModel.create(product)
}

async function obtenerProductos() {
    return await ProductModel.find();
}

async function obtenerUnProductoPorId( idProducto ) {
    return await ProductModel.findOne({ _id: idProducto });
}

async function obtenerUnProductoPorPosArancelId( posArancelId ) {
    return await ProductModel.findOne({ PosArancelId: posArancelId });
}

// async function obtenerUnProductoPorReferencia( referenciaId ) {
//     return await ProductModel.find(referenciaId => referenciaId );
// }

async function actualizarUnProductoCompleto( _id, dataActualizada ) {
    return await ProductModel.findOneAndUpdate(
        { _id },           // Objeto de consulta
        dataActualizada,   // Data que se va a actualizar (Objeto que tiene el tipo 'ProductModel')
        { new: true }
    );
}

async function buscarProductoPorRef( referencia ) {
    return await ProductModel.findOne({ referencia });
}


async function actualizarUnProductoPorID( id, productoActualizado ) {
    return await ProductModel.findOneAndUpdate( id, productoActualizado, { new: true } );
}

module.exports = {
    insertarProducto,
    obtenerProductos,
    obtenerUnProductoPorId,
    actualizarUnProductoCompleto,
    obtenerUnProductoPorPosArancelId,
    buscarProductoPorRef,
    actualizarUnProductoPorID
}