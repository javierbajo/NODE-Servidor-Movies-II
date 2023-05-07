const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cinemaSchema = new Schema(
    {
        name: {type: String, require: true},
        location: {type: String, required: true},
        movies: [{type: Schema.Types.ObjectId, ref: 'peli'}]
    },{
        timestamps: true,
        collection: 'cinemas'
    }
)

const Cinema = mongoose.model('cinema', cinemaSchema);

module.exports = Cinema;