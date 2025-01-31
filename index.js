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
//POST
// Ajouter un nouveau produits
app.post('/produits', (req, res) => {
    const newProduits = req.body;

   /* if (!newProduits || !newProduits.id || !newProduits.name) {
        return res.status(400).json({ message: 'Invalid produits data' });
    }*/

    produits.push(newProduits);
    res.status(201).json(newProduits);
});

//PUT
//Mettre à jour un produit existant

app.put('/produits/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let produit = produits.find(produit => produit.id === id);
    produit.nom = req.body.nom;
    produit.prix = req.body.prix;
    produit.quantite = req.body.quantite;
    res.status(200).json(produit);
});

//DELETE
//SUPP UN PRODUIT

app.delete('/produits/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let produit = produits.find(produit => produit.id === id);
    produits.splice(produits.indexOf(produit), 1);
    res.status(200).json(produits);
});





//Démarrage du serveur

app.listen(port, () =>{
    console.log(`Le serveur est démarré sur http://localhost:${port}`)
})

