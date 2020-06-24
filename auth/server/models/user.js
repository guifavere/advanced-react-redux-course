const moongose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
});

const ModelClass = moongose.model('user', userSchema);

module.exports = ModelClass;
