const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title" > <button type="submit"> Add product</button></input></form>');
    // res.send('working');
})

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});
app.use('/', (req, res, next) => {
    res.send('home ')
})

app.listen(3000)