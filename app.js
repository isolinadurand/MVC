const express = require('express');
const app = express();
//const path = require('path');
const port = 3000;

const mainRoutes = require('./routes/mainroute');



// define como static file path a public
app.use( express.static(__dirname + '/public/'))



app.listen(port, () => {
    console.log('Servidor funcionando en el puerto', port);
});
//views
app.use('/',mainRoutes);

