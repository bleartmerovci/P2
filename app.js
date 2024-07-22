const express= require('express');
const app = express();


app.use('/users', (req, res, next) => {
    console.log('The Middleware that handles just /users');
    next();
});

app.get('/', (req, res) => {
    res.send('The Middleware that handles all ');
});

app.listen(3000);