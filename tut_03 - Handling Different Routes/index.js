const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log('this allways runs');
    // res.send('in all ') // if i send response here othere response will not exicute
    next(); // this help to go to next other wise this will stop here
})
app.use('/add-product', (req, res, next) => {
    res.send('in add product page ')
})
app.use('/', (req, res, next) => { // in any other route this response will send
    res.send('any other route ')
})

app.listen(3000)