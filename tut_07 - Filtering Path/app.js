const express = require('express');
const app = express();

const adminRoutes = require('./Routes/admin')
const shopRoutes = require('./Routes/shop')

const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }))

app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use((req, res, next) => {
    res.status(404).send('<h1> Page not found</h1>');
})

app.listen(3000)