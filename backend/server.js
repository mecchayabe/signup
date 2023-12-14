const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "signup",
})

app.post("/signup", (req, res) => {
    // by tutorial
    const sql = "INSERT INTO login (`Name`,`Email`,`Password`) VALUES (?)"
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]
    
    db.query(sql, [values], (err, data) => {
        if(err) {
            return res.json(err);
        }
        return res.json(data);
    }) 
    
    // const sql = "INSERT INTO login (Name, Email, Password) VALUES (?, ?, ?)"; (by chatGPT)
})



app.listen(3001, ()=> {
    console.log("Database Connected");
})