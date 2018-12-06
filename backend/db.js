const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017//gameDB', (err) => {
    if(!err)
    Console.log('MongoDB connection succeeded.');
    else
    Console.log('Error in DB connectionb :' + JSON.stringify(err, undefined, 2))
});

module.exports = mongoose;