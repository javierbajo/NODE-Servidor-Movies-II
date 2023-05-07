
mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();
const Movie = require("../api/models/movie.model.js");


const arrayMovies = [
    {
        title: 'The Matrix',
        director: 'Hermanas Wachowski',
        year: 1999,
        genre: 'Acción',
      },
      {
        title: 'The Matrix Reloaded',
        director: 'Hermanas Wachowski',
        year: 2003,
        genre: 'Acción',
      },
      {
        title: 'Buscando a Nemo',
        director: 'Andrew Stanton',
        year: 2003,
        genre: 'Animación',
      },
      {
        title: 'Buscando a Dory',
        director: 'Andrew Stanton',
        year: 2016,
        genre: 'Animación',
      },
      {
        title: 'Interestelar',
        director: 'Christopher Nolan',
        year: 2014,
        genre: 'Ciencia ficción',
      },
      {
        title: '50 primeras citas',
        director: 'Peter Segal',
        year: 2004,
        genre: 'Comedia romántica',
      },
    ];

mongoose.connect(process.env.DB_URL)
.then(async () => {
    const allMovies = await Movie.find();
    if(allMovies.length > 0){
        await Movie.collection.drop();
        console.log("películas borradas");
    }
})
.catch((error) => console.log("Error borrando películas"))
.then(async() => {
    const moviesMap = arrayMovies.map(movie => new Movie(movie));
    await Movie.insertMany(moviesMap);
    console.log("Películas insertadas");
})
.catch((error) => console.log(`Error insertando películas: $:{error}`))
.finally(() => mongoose.disconnect());



