const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const logTime = require('./middleware/logTime');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(logTime);

app.use('/product', productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
