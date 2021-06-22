const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const authRouter = require('./routes/admin/auth');
const adminProductsRouter = require('./routes/admin/products')
const productsRouter = require('./routes/products');
const cartsRouter = require('./routes/carts');
const app = express();

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ['a89076s0d87fvbmdwkrtu'],
  })
);
app.use(authRouter);
app.use(cartsRouter);
app.use(productsRouter);
app.use(adminProductsRouter);
app.listen(3000, () => {
  console.log('listening');
});
