const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cinemaSchema = new Schema(
    {
        name: {type: String, required: true},
        location: {type: String, required: true},
        movies: [{type: Schema.Types.ObjectId, ref: 'movies'}] // la ref: es el nombre de la colección en la DB de donde toma los id
    },{
        timestamps: true,
        collection: 'cinemas'
    }
)

const Cinema = mongoose.model('cinemas', cinemaSchema);

module.exports = Cinema;