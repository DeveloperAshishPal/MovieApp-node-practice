var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var local = require('./local');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json()); 

// connect to mongoose
mongoose.connect('mongodb://admin:admin@ds013222.mlab.com:13222/moviesapp');
var db = mongoose.connection;

var Movie = require('./models/movie');

app.get('/', function(req,res){
    res.send('please use /api/movies ');
});

app.get('/api/movies',function(req,res){
    Movie.getMovies(function(err,movies){
        if(err){
            throw err;
        }
        res.json(movies);
    });
});

app.get('/api/movies/:_id',function(req,res){
    Movie.getMovieById(req.params._id,function(err,movie){
        if(err){
            throw err;
        }
        res.json(movie);
    });
});


/*app.post('/api/movies',function(req,res){

  var movie = req.body;  Movie.addMovie(movie,function(err,movie){
        if(err){
            throw err;
        }
        res.json(movie);
    });
});*/


app.listen(process.env.PORT || 3000);
console.log(' running on 30000!!!!!!!!');