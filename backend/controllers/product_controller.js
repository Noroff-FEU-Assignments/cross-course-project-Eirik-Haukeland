const Product = require('../models/product_model');

const { getPostData } = require('../utils');

// @desc  Gets All Products
// @route GET /api/products
async function getProducts(request, response) {
  try {
    const products = await Product.findAll();

    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(products));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

// @desc  Gets Singel Product
// @route GET /api/products/:id
async function getProduct(request, response, id) {
  try {
    const product = await Product.findById(id);

    if (!product) {
      response.writeHead(404, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify({ message: 'Product Not Found' }));
    } else {
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify(product));
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

// @desc  Create A Product
// @route POST /api/products
async function createProduct(request, response) {
  try {
    const body = await getPostData(request);

    const { title, description, price } = JSON.parse(body);

    const product = {
      title,
      description,
      price,
    };

    const newProduct = await Product.create(product);

    response.writeHead(201, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(newProduct));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

// @desc  update A Product
// @route put /api/product/:id
async function updateProduct(request, response, id) {
  try {
    const product = await Product.findById(id);

    if (!product) {
      response.writeHead(404, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify({ message: 'Product Not Found' }));
    } else {
      const body = await getPostData(request);

      const { title, description, price } = JSON.parse(body);

      const productData = {
        title: title || product.title,
        description: description || product.description,
        price: price || product.price,
      };

      const updatedProduct = await Product.create(id, productData);

      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify(updatedProduct));
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

// @desc  remove Product
// @route DELETE /api/products/:id
async function removeProduct(request, response, id) {
  try {
    const product = await Product.findById(id);

    if (!product) {
      response.writeHead(404, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify({ message: 'Product Not Found' }));
    } else {
      await Product.remove(id);

      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify({ message: `product ${id} removed` }));
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  removeProduct,
};
