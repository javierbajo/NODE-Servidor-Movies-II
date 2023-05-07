
const Cinema = require('../models/cinema.model.js')


// Devuelve todos los cines
const getAllCinemas = async (req, res) => {
    try{
        const allCinemas = await Cinema.find().populate({
            path: "movies", select:"title"
        }); // .find({_id: id}) es lo mismo que .findById(id);
        return res.status(200).json(allCinemas);
    }catch(error){
        return res.status(500).json(error);
    }
    
}

// Devuelve un cine según su _id
const getCinemasId = async (req, res) => {
    try{
        const {id} = req.params; 
        const getCinemaId = await Cinema.findById(id).populate({
            path: "movies", select:"title"
        }); // .find({_id: id}) es lo mismo que .findById(id)
        return res.status(200).json(getCinemaId);
    }catch(error){
        return res.status(500).json(error);
    }
    
}

// Devuelve la dirección del cine al mandar su nombre por la URL
const getCinemasName = async (req, res) => {
    try{
        const {name} = req.params; 
        const getCinemaName = await Cinema.find({name: name},{_id:0, location:1});
        return res.status(200).json(getCinemaName);
    }catch(error){
        return res.status(500).json(error);
    }
    
}

// Crea un nuevo cine en la DB
const postCinemas = async (req, res) => {
    try{
        const newCinema = new Cinema(req.body);
        const createdCinema = await newCinema.save();
        return res.status(201).json(createdCinema);
    }catch (error) {
        return res.status(500).json(error);
    }
}
// Modifica un cine enviando id por la url y datos nuevos por el body
const putCinemas = async (req, res) => {
    try{
        const {id} = req.params;
        const putCinema = new Cinema(req.body);
        putCinema._id = id;
        const updatedCinema = await Cinema.findByIdAndUpdate(id, putCinema, {new: true});
        if(!updatedCinema){
            return res.status(404).json({message: "Cine no encontrado"})
        }
        return res.status(200).json(updatedCinema);
    }catch(error){
        return res.status(500).json(error)
    }
}
// Elimina cines de la base de datos mandando su id por la url
const deleteCinemas = async (req, res) => {
    try{
        const {id} = req.params;
        const deletedCinema = await Cinema.findByIdAndDelete(id);
        if(!deletedCinema){
            return res.status(404).json({message:"Cine no encontrado"});
        }
        return res.status(200).json(deletedCinema);
    }catch(error){
        return res.status(500).json(error);
    }
    
}

// Añade una película al array movies[] del cine ENVIANDO idcinema y idmovie mediante query:
// EJEMPLO http://localhost:3000/cinemas/addmovie?idcinema=64578d77ee6fbcb3490197ad&idmovie=645786bc311c9738c6ebeb54
const getAddMovieToCinema = async (req, res) => {
    try{
        const {idcinema, idmovie} = req.query;
        const pivoteCinema = await Cinema.findById(idcinema);
        pivoteCinema.movies.push(idmovie);
        const updatedCinema = await Cinema.findByIdAndUpdate(idcinema, pivoteCinema, {new: true});
        /* ESTO NO FUNCIONA!:
        const updatedCinema = await Cinema.update(
            {_id: idcinema},
            {$push:{movies: "idmovie"}}, 
            done
            );*/
        return res.status(200).json(updatedCinema);
    }catch(error){
        return res.status(500).json(error);
    }
    
}

module.exports = {
    getAllCinemas,
    getCinemasId,
    getCinemasName,
    // -----------------
    postCinemas, 
    putCinemas, 
    deleteCinemas, 
    // -----------------
    getAddMovieToCinema 
    };