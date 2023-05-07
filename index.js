const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const routerMovie = require('./src/api/routes/movie.routes.js');
const routerCinema = require('./src/api/routes/cinema.routes.js');


const app = express();
const {connect} = require('./src/utils/db.js');
connect();

app.use(express.json());
app.use('/movies', routerMovie);
app.use('/cinemas', routerCinema);




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
