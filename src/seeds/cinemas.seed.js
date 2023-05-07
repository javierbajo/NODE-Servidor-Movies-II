mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();
const Cinema = require("../api/models/cinema.model.js");


const arrayCinemas = [
    {
        name: 'Manhattan',
        location: 'C/Cervantes, 13, 15, 47005 Valladolid',
        movies: []
    },
    {
        name: 'Miró',
        location: 'C/Gobernador Fernández Jiménez, Segovia',
        movies: []
    },
    {
        name: 'Zuloaga',
        location: 'C/Real, Segovia',
        movies: []
    },
    {
        name: 'Yelmo',
        location: 'Plaza estación, 1, 36201 Vigo',
        movies: []
    },
    {
        name: 'Gran Vía',
        location: 'Rúa Miradoiro, 2, 36210Vigo, Pontevedra',
        movies: []
    }
    ];

mongoose.connect(process.env.DB_URL)
.then(async () => {
    const allCinemas = await Cinema.find();
    if(allCinemas.length > 0){
        await Cinema.collection.drop();
        console.log("cines borrados");
    }
})
.catch((error) => console.log("Error borrando cines"))
.then(async() => {
    const cinemasMap = arrayCinemas.map(cinema => new Cinema(cinema));
    await Cinema.insertMany(cinemasMap);
    console.log("Cines insertados");
})
.catch((error) => console.log(`Error insertando cines: $:{error}`))
.finally(() => mongoose.disconnect());



