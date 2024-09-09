let products = [
    { id: 1, name: 'iPhone 12 Pro', price: 1099.99 },
    { id: 2, name: 'Samsung Galaxy S21', price: 999.99 },
    { id: 3, name: 'Sony PlayStation 5', price: 499.99 },
    { id: 4, name: 'MacBook Pro 16', price: 2399.99 },
    { id: 5, name: 'DJI Mavic Air 2', price: 799.99 },
  ];
  
  
  const getAll= (req, res) => {
    res.json(products);
  };
  

  const getById = (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  };
  
  
  const create = (req, res) => {
    const { name, price } = req.body;
    const newProduct = {
      id: products.length + 1,
      name,
      price,
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
  };
  

  const update = (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ message: 'Product not found' });
  
    const { name, price } = req.body;
    if (name) product.name = name;
    if (price) product.price = price;
  
    res.json(product);
  };
  

  const deleteProduct = (req, res) => {
    const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
    if (productIndex === -1) return res.status(404).json({ message: 'Product not found' });
  
    products.splice(productIndex, 1);
    res.json({ message: 'Product deleted successfully' });
  };
  
  module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteProduct,
  };
  