let mongoose = require('mongoose');

// Schema do artigo
let reviewSchema = mongoose.Schema({
  user:{
    type: String,
    required: true
  },
  livro:{
    type: String,
    required: true
  },
  conserv:{
    type: String,
    enum: ['Ótimo','Bom', 'Ruim', 'Regular'],
    required: true
  },
  nota:{
    type: Number,
    required: true
  },
  obs:{
    type: String,
    required: false
  }

});

let Review = module.exports = mongoose.model('Review',reviewSchema);


module.exports.getReviews = (callback, limit) => {
	Review.find(callback).limit(limit);
}

// Add Review
module.exports.addReview = (review, callback) => {
	Review.create(review, callback);
}
