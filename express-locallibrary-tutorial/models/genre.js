var mysql = require('mysql');

var Schema = mysql.Schema;

var GenreSchema = new Schema({
    name: {type: String, required: true, minlength: 3, maxlength: 100}
});

// Virtual for this genre instance URL.
GenreSchema
.virtual('url')
.get(function () {
  return '/catalog/genre/'+this._id;
});

// Export model.
module.exports = mysql.model('Genre', GenreSchema);
