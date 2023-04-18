const express = require('express');
const session = require('express-session');
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const myPageRouter = require('./routes/myPage');
const productsRouter = require('./routes/products');
const errorsRouter = require('./routes/errors');
const sessionConfig = require('./config/session');
const nunjucks = require('nunjucks');
const path = require('path');
const app = express();

nunjucks.configure('views', {
  autoescape: true,
  express: app,
})

app.use('/static/', express.static(path.join(__dirname, 'images')));
app.use(session(sessionConfig));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', indexRouter);
app.use('/auth', authRouter);
app.use('/myPage', myPageRouter);
app.use('/products', productsRouter);
app.use('/errors', errorsRouter);
app.listen(3000);