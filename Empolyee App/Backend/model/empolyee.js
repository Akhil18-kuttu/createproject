var mongoose = require('mongoose');

var schema = mongoose.Schema(
    {
        Name: String,
        Age: Number,
        Dept: String,
        Salary: Number,
    }
)

var empmodel = mongoose.model("empolyee", schema)  //creating models
module.exports = empmodel;      //to export model 
