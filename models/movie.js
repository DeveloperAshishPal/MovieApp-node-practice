var mongoose = require('mongoose');

// genre schema

var movieSchema = mongoose.Schema({
    title : {
        type:String,
        required:true
    },
    genre : {
        type:String,
        required:true
    },
    image_url : {
        type:String,
        required:true
    },
    duration : {
        type:String,
    },
    year : {
        type:String,
    },
    rating : {
        type:String,
    },
    description : {
        type:String,
        required:true
    },
    download_links : {
        type:Array,
        required:true
    },
    ads_links : {
        type:Array,
        required:true
    },
    online_links : {
        type:Array,
        required:true
    },
    screenshot_links : {
        type:Array,
        required:true
    },
    create_date:{
        type:Date,
        default:Date.now
    }
});

var Movie = module.exports = mongoose.model('Movie',movieSchema);

// get movies
module.exports.getMovies = function(callback,limit){
    Movie.find(callback).limit(limit);
}
// get book by id
module.exports.getMovieById = function(id,callback){
    Movie.findById(id,callback);
}

// add movie if admin
module.exports.addMovie = function(movie,callback){
    Movie.create(movie,callback);
}


