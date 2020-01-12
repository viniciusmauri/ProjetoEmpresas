 const express = require('express');
 const bodyParser = require('body-parser');
 const routes = require('./routes');

 require = ('./database');

 const app = express();

 let port = 3000;
 app.use(routes);
 app.use(express.json);
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: false }));

 /*require('./controllers/authController')(app);
 require('./controllers/signInController')(app);*/


 app.listen(port, () =>
     console.log(`Server ONLINE on port:`, port));