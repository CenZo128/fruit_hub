require('dotenv').config()
const mongoose = require('mongoose');    
const mongoURI = process.env.MONGO_URI;
mongoose.Promise = global.Promise;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
};
mongoose.connect(mongoURI, options);

const db = mongoose.connection;
module.exports = db