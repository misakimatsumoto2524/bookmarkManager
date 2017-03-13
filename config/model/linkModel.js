var mongoose = require ('mongoose');
var schema = mongoose.Schema;

var linkSchema = new Schema ({
  category: String,
  link: URL
})

var link = mongoose.model('link', linkSchema);

module.exports = link;