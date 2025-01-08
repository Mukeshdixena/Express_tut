const express = require('express');
const app = express();

const adminRoutes = require('./Routes/admin')
const shopRoutes = require('./Routes/shop')

const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }))

app.use(adminRoutes)
app.use(shopRoutes)


app.listen(3000)