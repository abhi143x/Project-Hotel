const express = require ("express");
const mysql = require ("mysql2");
const bodyparser = require("body-parser");
const cors = require("cors");
const {body, validationResult} = require("express-validator");

const app = express ();
const port = 8080;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

//connection
const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "abhi@123",
    port: 3306,
    database: "hotel_db"
});

//connect to the first database

db.connect((err) =>{
    if (err) {
        console.error("Error connecting:", err.stack);
        return;
    }
    console.log("connected as id", db.thread);
});

//route to get admin details

app.get("/admin",(req,res)=>{
    const colAdmin= "SELECT AdminID, AdminName,Password FROM admin_login";
    db.query(colAdmin,(err,results) =>{
        if (err){
            return res.status(500).json({error:"Database query failed."});
        }
        res.json(results);
    });

});

//route to get admin login details by ID

app.get("/admin/:ID",(req,res) =>{
    const {ID} = req.params;
    const colAdmin = "SELECT AdminID, AdminName,Password FROM admin_login WHERE AdminID = ?";
    db.query(colAdmin,[ID],(err,result)=>{
        if(err){
            return res.status(500).json({
                message:"Database error", error:err});
        }
        if (result.length === 0){
            return res.status(400).json({message:"Details not found"});
        }
        res.status(200).json({admin:result[0]});
    });
});

//route to add admin login details (post request)

app.post("/addadmin",(req,res) => {
    const {
        AdminName,
        Password,
    } = req.body;
    const error = [];

    //validation
    if (!AdminName)
        error.push({field : "AdminName", message : "AdminName is required"});
    if (!Password)
        error.push({field: "Password", message : "Password is required"});
    if (error.length > 0) {
        return res.status(400).json({error});
    }
    const query = `INSERT INTO admin_login(AdminName,Password) VALUES (?,?)`;
    db.query(
        query,[AdminName,Password],(err,result)=>{
            if (err){
                return res.status(500).json({message : "Database err",error:err});
            }
            res.status(200).json({message: "Login details added Successfully",
                AdminID: result.insertId,
            });
        }
    )
});

//start the server

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
});