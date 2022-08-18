const http = require('http')
const { getProducts, getProduct, createProduct, updateProduct, removeProduct } = require('./controllers/product_controller')

const server = http.createServer((request, response) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET',
    'Access-Control-Max-Age': 2592000, // 30 days
    'Cache-Control': 'no-cache',
  };

  Object.entries(headers).forEach(([key, value]) => {
    response.setHeader(key, value)
  })

  if (request.method === 'OPTIONS') {
    response.writeHead(204, headers);
    response.end();
    return;
  }

  if (request.url === '/api/products' && request.method === 'GET') {
    getProducts(request, response)
  } else if (request.url.match(/\/api\/product\/([0-9]+)/) && request.method === 'GET') {
    const id = request.url.split('/')[3]
    getProduct(request, response, id)
  } else if (request.url === '/api/products' && request.method === 'POST') {
    createProduct (request, response)
  } else if (request.url.match(/\/api\/product\/([0-9]+)/) && request.method === 'PUT'){
    const id = request.url.split('/')[3]
    updateProduct(request, response, id)
  } else if (request.url.match(/\/api\/product\/([0-9]+)/) && request.method === 'DELETE'){
    const id = request.url.split('/')[3]
    removeProduct(request, response, id)
  } else {
    response.writeHead(404, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify({ message: 'Route Not Found' }))
  }
})

const port = process.env.PORT || 5000

server.listen(port, () => console.log(`server running on port ${port}`))
