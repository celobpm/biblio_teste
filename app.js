const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

const User =require('./models/user');
const Book =require('./models/book');
const Review =require('./models/review');

// Connecta a DB
mongoose.connect('mongodb://localhost/library');
var db = mongoose.connection;


//Homepage get
app.get('/api/', (req, res) => {
	User.getUsers((err, users) => {
		if(err){
			throw err;
		}
		res.json(users);
	});
});

//Homepage post
app.post('/api/', (req, res) => {
	User.getUser({name: req.body.name}, (err, user) => {
		if(err){
			throw err;
		}
		console.log(user);
		res.json(user);
	});
});

//get da pagina para submeter avaliação
app.get('/api/user/review/:id', (req, res) => {
	Book.getBooks((err, books) => {
		if(err){
			throw err;
		}
		res.json(books);
	});
});

//post da pagina para submeter avaliação
app.post('/api/user/review/:id', (req, res) => {
	var review = req.body;

	User.getUserById(req.params.id, (err, user )=> {
		if(err){
			throw err;
		}
		review.user = user.name
			console.log(review);
		Review.addReview(review, (err, review) => {
			if(err){
				throw err;
			}
			res.json(review);
		});
	});
});

//Adiciona usuario
app.post('/api/user/add', (req, res) => {
	var user = req.body;
	User.addUser(user, (err, user) => {
		if(err){
			throw err;
		}
		res.json(user);
	});
})

//lista de avaliacoes
app.get('/api/userreviews', (req, res) => {
	Review.getReviews((err, reviews) => {
		if(err){
			throw err;
		}
		res.json(reviews);
	});
});

//lista de livros
app.get('/api/books', (req, res) => {
	Book.getBooks((err, books) => {
		if(err){
			throw err;
		}
		res.json(books);
	});
});

//adiciona livro
app.post('/api/books', (req, res) => {
	var book = req.body;
	Book.addBook(book, (err, book) => {
		if(err){
			throw err;
		}
		res.json(book);
	});
});


app.listen(3000);
console.log('Running on port 3000...');
