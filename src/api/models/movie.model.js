const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema(
    {
        title: {type: String, require: true},
        director: {type: String, required: true},
        year: {type: Number, require: false},
        genre: {type: String, required: true},
    },{
        timestamps: true,
        collection: 'movies'
    }
)

const Movie = mongoose.model('movie', movieSchema);

module.exports = Movie;