require('dotenv').config();
const path = require('path');
const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const router = require('./routes');

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// compress all responses
app.use(compression());
// Routes
app.use('/products', router.products);
app.use('/qa', router.qa);
app.use('/reviews', router.reviews);
app.use('/cart', router.cart);
app.use('/interactions', router.interactions);

// Serving static files
app.use(express.static(path.join(__dirname, '../client/dist')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server available at http://localhost:${PORT}`);
});
