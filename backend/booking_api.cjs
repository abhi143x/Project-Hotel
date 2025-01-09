const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");
const { body, validationResult } = require("express-validator");

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//connection to Db
const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "abhi@123",
  port: 3306,
  database: "hotel_db",
});

db.connect((err) => {
  if (err) {
    console.error(`Error Connecting ${err.stack}`);
    return;
  }
  console.log(`Connected as id ${db.threadId}`);
});

//Route to get Booking  Details
app.get("/booking", (req, res) => {
  const colBook =
    "SELECT BookingID, FullName , Email, Contact, CheckInDate, CheckOutDate, NoOfGuest, RoomType, IdentityProof FROM booking";
  db.query(colBook, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Datebase error", error: err });
    }
    res.json(result);
  });
});

//Route to get booking details by ID
app.get("/booking/:ID", (req, res) => {
  const { ID } = req.params;
  const ColBook =
    "SELECT BookingID, FullName, Email, Contact, CheckInDate, CheckOutDate, NoOfGuest, RoomType, IdentityProof FROM booking WHERE BookingID =?";
  db.query(ColBook, [ID], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: "booking not found" });
    }
    res.status(200).json({ BookingID: result[0] });
  });
});

//Route to add booking details
app.post("/addbooking", (req, res) => {
  const {
    FullName,
    Email,
    Contact,
    CheckInDate,
    CheckOutDate,
    NoOfGuest,
    IdentityProof,
  } = req.body;
  const error = [];

  // Basic Validation
  if (!FullName)
    error.push({ field: "FullName", message: "FullName is required" });
  if (!Email) error.push({ field: "Email", messge: "Email is required" });
  if (!Contact)
    error.push({ field: "Contact", message: "Contact is required" });
  if (!CheckInDate)
    error.push({ field: "CheckInDate", message: "CheckInDate is required" });
  if (!CheckOutDate)
    error.push({ field: "CheckOutDate", message: "CheckOutDate is required" });
  if (!NoOfGuest)
    error.push({ field: "NoOfGuest", message: "NoOfGuest is required" });
  if (!IdentityProof)
    error.push({
      field: "IdentityProof",
      message: "IdentityProof is required",
    });

  // If validation errors exist, return them
  if (error.length > 0) {
    return res.status(400).json({ error });
  }

  // SQL Query
  const query = `INSERT INTO booking (FullName, Email, Contact, CheckInDate, CheckOutDate, NoOfGuest,IdentityProof) VALUES (?, ?, ?, ?, ?, ?, ?)`;

  db.query(
    query,
    [
      FullName,
      Email,
      Contact,
      CheckInDate,
      CheckOutDate,
      NoOfGuest,
      IdentityProof,
    ],
    (err, result) => {
      if (err) {
        // Handle database error
        return res.status(500).json({ message: "Database Error", error: err });
      }
      // Successful insertion
      res
        .status(201)
        .json({ message: "Booking Created", BookingID: result.insertId });
    }
  );
});

app.post("/bookingdel/:ID", (req, res) => {
  const { ID } = req.params;
  const DelBook = "DELETE FROM booking WHERE BookingID =?";
  db.query(DelBook, [ID], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Booking not found" });
    }
    res
      .status(200)
      .json({
        message: "Booking Deleted Successfully",
        deletedRows: result.affectedRows,
      });
  });
});

app.post("/bookingupdate/:ID", (req, res) => {
  const { ID } = req.params;
  const {
    FullName,
    Email,
    Contact,
    CheckInDate,
    CheckOutDate,
    NoOfGuest,
    RoomType,
    IdentityProof,
  } = req.body;

  // SQL Query to Update Booking
  const UpdateBook = `
    UPDATE booking 
    SET FullName = ?, 
        Email = ?, 
        Contact = ?, 
        CheckInDate = ?, 
        CheckOutDate = ?, 
        NoOfGuest = ?, 
        RoomType = ?, 
        IdentityProof = ?
    WHERE BookingID = ?`;

  // Execute Query
  db.query(
    UpdateBook,
    [
      FullName,
      Email,
      Contact,
      CheckInDate,
      CheckOutDate,
      NoOfGuest,
      RoomType,
      IdentityProof,
      ID,
    ],
    (err, result) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Database error", error: err });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Booking not found" });
      }

      res
        .status(200)
        .json({ message: "Booking Updated Successfully" });
    }
  );
});


//Server start
app.listen(port, () => {
  console.log(`Server is running on http;//localhost:${port}`);
});
