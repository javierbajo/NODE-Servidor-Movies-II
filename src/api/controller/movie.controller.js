
const Movie = require('../models/movie.model.js')


// Devuelve todas las películas
const getMovies = async (req, res) => {
    try{
        const allMovies = await Movie.find()
        return res.status(200).json(allMovies);
    }catch(error){
        return res.status(500).json(error);
    }
    
}

// Devuelve una película según su _id
const getMoviesId = async (req, res) => {
    try{
        const {id} = req.params; 
        const getMovieId = await Movie.find({_id: id});
        return res.status(200).json(getMovieId);
    }catch(error){
        return res.status(500).json(error);
    }
    
}

// Devuelve el director de la película según su título
const getMoviesTitle = async (req, res) => {
    try{
        const {title} = req.params; 
        const getMovieTitle = await Movie.find({title: title},{_id:0, director:1});
        return res.status(200).json(getMovieTitle);
    }catch(error){
        return res.status(500).json(error);
    }
    
}

// Devuelve películas según su género
const getMoviesGenre = async (req, res) => {
    try{
        const {genre} = req.params; 
        const getMovieGenre = await Movie.find({genre: genre});
        return res.status(200).json(getMovieGenre);
    }catch(error){
        return res.status(500).json(error);
    }
    
}

// Devuelve películas a partir del año 2010 (incluyendo 2010)
const getMoviesYear2010 = async (req, res) => {
    try{
        const getMovieYear = await Movie.find({year: {$gte:2010}});
        return res.status(200).json(getMovieYear);
    }catch(error){
        return res.status(500).json(error);
    }
    
}
// A PARTIR DE AQUÍ ES PROYECT 2
// Crea una nueva película nueva en la DB
const postMovies = async (req, res) => {
    try{
        const newMovie = new Movie(req.body);
        const createdMovie = await newMovie.save();
        return res.status(201).json(createdMovie);
    }catch (error) {
        return res.status(500).json(error);
    }
}
// Modifica una película enviando id por la url y datos nuevos por el body
const putMovies = async (req, res) => {
    try{
        const {id} = req.params;
        const putMovie = new Movie(req.body);
        putMovie._id = id;
        const updatedMovie = await Movie.findByIdAndUpdate(id, putMovie, {new: true});
        if(!updatedMovie){
            return res.status(404).json({message: "Película no encontrada"})
        }
        return res.status(200).json(updatedMovie);
    }catch(error){
        return res.status(500).json(error)
    }
}
// Elimina películas de la base de datos mandando su id por la url
const deleteMovies = async (req, res) => {
    try{
        const {id} = req.params;
        const deletedMovie = await Movie.findByIdAndDelete(id);
        if(!deletedMovie){
            return res.status(404).json({message:"Película no encontrada"});
        }
        return res.status(200).json(deletedMovie);
    }catch(error){
        return res.status(500).json(error);
    }
    
}

module.exports = {
    getMovies,
    getMoviesId,
    getMoviesTitle,
    getMoviesGenre,
    getMoviesYear2010,
    // A partir de aquí es projet 2
    postMovies, 
    putMovies, 
    deleteMovies, 
    };