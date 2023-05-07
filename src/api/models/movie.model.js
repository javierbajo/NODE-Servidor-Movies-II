const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema(
    {
        title: {type: String, required: true},
        director: {type: String, required: true},
        year: {type: Number, required: false},
        genre: {type: String, required: true},
    },{
        timestamps: true,
        collection: 'movies'
    }
)

const Movie = mongoose.model('movies', movieSchema);

module.exports = Movie;