const express = require('express');
const mysql = require("mysql2");
const bodyParser = require('body-parser');
const cors = require('cors')
const {body, validationResult} = require('express-validator');

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//connection to Db
const db = mysql.createConnection({
    host:"127.0.0.1",
    user: "root",
    password: "abhi@123",
    port: 3306,
    database: "hotel_db"
})

db.connect((err)=>{
    if(err){
        console.error(`Error Connecting ${err.stack}`);
        return;
    }
    console.log(`Connected as id ${db.threadId}`);
});

//Route to get customer details
app.get("/cust",(req, res)=>{
    const colCust = "SELECT CustID, FirstName, LastName, Email, Contact, ValidID FROM customers";
    db.query(colCust, (err, result)=>{
        if(err){
            return res.status(500).json({message: "Database error", error:  err});
        }
        res.json(result)
    });
});

//Route to get customer details by ID
app.get("/cust/:ID",(req, res)=>{
    const {ID}= req.params
    const colCust = "SELECT CustID, FirstName, LastName, Email, Contact, ValidID FROM customers where CustID = ?";
    db.query(colCust,[ID], (err, result)=>{
        if(err){
            return res.status(500).json({message: "Database error", error: err});
        }
        if(result.length === 0){
            return res.status(404).json({message : "Customer not found"})
        }
        res.status(200).json({customer: result[0]})
    });
});

//Route to Add customers
app.post("/addcust", (req, res) => {
    const { FirstName, LastName, Email, Contact, ValidID } = req.body;
    const error=[];
    

    // Basic Validation
    if (!FirstName)
        error.push({ field: "FirstName", message: "FirstName is required" });
    if (!LastName)
        error.push({ field: "LastName", message: "LastName is required" });
    if (!Email)
        error.push({ field: "Email", message: "Email is required" });
    if (!Contact)
        error.push({ field: "Contact", message: "Contact is required" });
    if (!ValidID)
        error.push({ field: "ValidID", message: "ValidID is required" });

    // If validation errors exist, return them
    if (error.length > 0) {
        return res.status(400).json({ error });
    }

    // SQL Query
    const query = `INSERT INTO customers (FirstName, LastName, Email, Contact, ValidID) VALUES (?, ?, ?, ?, ?)`;

    db.query(query, [FirstName, LastName, Email, Contact, ValidID], (err, result) => {
        if (err) {
            // Handle database error
            return res.status(500).json({ message: "Database Error", error: err });
        }
        // Successful insertion
        res.status(201).json({ message: "Customer Added", CustID: result.insertId });
    });
});


//start the server
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
});