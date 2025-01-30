const express = require('express');
const app = express();
const port =  3000;

//Middleware d'analyse du JSON les requêtes

app.use(express.json());

let produits =[
    {"id": 1, "nom": "Thé Vert Matcha", prix: 12.99, quantite: 10 },
    {"id": 2, "nom": "Thé Vert", prix: 12.99, quantite: 10 },
];


// Routes
// GET via la route produits
//Liste des produits

app.get("/produits",(req, res) =>{
  res.json(produits);

})




//Démarrage du serveur

app.listen(port, () =>{
    console.log(`Le serveur est démarré sur http://localhost:${port}`)
})

