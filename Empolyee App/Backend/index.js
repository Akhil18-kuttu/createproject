const express = require('express');
require("./connection");  // Connection to MongoDB

var empmod = require("./model/empolyee");
var cors = require('cors');

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());  // Enable Cross-Origin Resource Sharing

// Test Route (example)
app.get("/trail", (req, res) => {
    res.send("404");
});

// Add Data Route (POST)
app.post('/add', async (req, res) => {
    try {
        await empmod(req.body).save();
        console.log("Success");
        res.send({ message: "Data added" });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error adding data" });
    }
});

// Get Data Route (GET)
app.get('/view', async (req, res) => {
    try {
        const empdata = await empmod.find();
        res.send(empdata);  // Send the data
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error fetching data" });
    }
});

// Delete Data Route (DELETE)
app.delete('/remove/:id', async (req, res) => {
    try {
        await empmod.findByIdAndDelete(req.params.id);
        res.send({ message: "Data deleted" });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error deleting data" });
    }
});

// Update Data Route (PUT)
app.put('/update/:id', async (req, res) => {
    try {
        await empmod.findByIdAndUpdate(req.params.id, req.body);
        res.send({ message: "Data updated" });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error updating data" });
    }
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
