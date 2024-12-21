//to import mongoose to connect database
var mongoose = require('mongoose');




//to connnect mongodb
mongoose.connect('mongodb+srv://akhil18:akhil18@cluster0.jptk4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('Connected!');
    })
     .catch((err) => {
        console.log(err);
    })