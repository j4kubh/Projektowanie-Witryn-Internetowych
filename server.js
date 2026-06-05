const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database("./database.db");

/* tworzenie tabeli */
db.serialize(() => {

    db.run(`
        CREATE TABLE IF NOT EXISTS fish (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            description TEXT,
            price INTEGER,
            image TEXT
        )
    `);

});
db.get("SELECT COUNT(*) AS count FROM fish", (err,row)=>{

    if(row.count === 0){

        const stmt = db.prepare(`
            INSERT INTO fish(name,description,price,image)
            VALUES (?,?,?,?)
        `);

        stmt.run("Gupik","Piękna rybka ławicowa",15,"gupik.webp");
        stmt.run("Neon","Mała rybka stadna",12,"neon.webp");
        stmt.run("Skalar","Elegancka ryba",40,"skalar.webp");
        stmt.run("Bojownik","Kolorowa ryba ozdobna",25,"bojowniki.webp");
        stmt.run("Danio","Aktywna ryba",10,"danio.webp");
        stmt.run("Zbrojnik L519","Glonojad",35,"glonojad.webp");
        stmt.run("Razbora","Ryba ławicowa",14,"razbora.webp");
        stmt.run("Kirysek","Ryba denna",18,"kirys.webp");
        stmt.run("Krewetka","Czyści akwarium",8,"krewetka.webp");
        stmt.run("Molinezja","Popularna rybka",20,"molinezja.webp");

        stmt.finalize();
    }
});
app.get("/api/fish",(req,res)=>{

    db.all("SELECT * FROM fish",(err,rows)=>{

        if(err){
            return res.status(500).json(err);
        }

        res.json(rows);

    });

});
app.use(express.static("./"));

app.listen(3000,()=>{

    console.log("Serwer działa:");
    console.log("http://localhost:3000");

});