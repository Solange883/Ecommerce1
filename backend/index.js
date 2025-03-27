//const port =4000;
const express=require("express");
const app = express();
const mongoose= require("mongoose");
const jwt = require("jsonwebtoken");
const multer=require("multer");
const path = require("path");
const cors =require("cors");
const axios = require('axios');
const Commandes = require('./models/Commande');

mongoose.set('strictQuery', true); // Évite les requêtes non filtrées
mongoose.set('sanitizeFilter', true); // Protège contre les injections NoSQL

app.use(express.json());
app.use(cors());

//connexion BD avec MongoDB et fichier .env
require('dotenv').config();
const PORT = process.env.PORT || 4000;


// Connexion sécurisée
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connecté '))
  .catch(err => console.error('Erreur MongoDB:', err));

//API Creation

app.get("/",(req,res)=>{
    res.send("Express App is Running")
})

//POURADMIN DEBUT
//Moteur de stockage dimage
const storage= multer.diskStorage({
    destination : './upload/images',
    filename:(req,file,cb)=>{
      return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload = multer({storage:storage})
//création d'un point de terminaison de téléchargement pour les images
app.use('/images',express.static('upload/images'))
app.post('/upload',upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${PORT}/images/${req.file.filename}`
    })
})


//Modele de produits
const Product = mongoose.model("Product",{
    id:{
        type:Number,
        required:true,
       
    },
    name:{
        type: String ,
        required: true,
    },
    image:{
        type: String ,
        required: true,
    },
    category:{
        type:  String,
        required:true ,
    },
    new_price:{
        type: Number ,
       
    },
    old_price:{
        type: Number ,
        required: true,
    },
    date:{
        type:Date,
        default: Date.now ,
    },
    disponible:{
        type:Boolean  ,
        default:true ,
    }
})

app.post('/addproduct',async(req,res)=>{
    //générer un nouvel ID automatique à chaque fois qu'on ajoute un produit
    let products = await Product.find({});
    let id;
    if(products.length>0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id+1;
    }else{
        id=1;
    }
    
    const product = new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
    });
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success:true,
        name:req.body.name,
    })
})

//Creation dApi pour supprimer les produits
app.post('/removeproduct',async (req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name,
    })
})

//Création dAPI pour obtenir des produits
app.get('/allproducts',async (req,res)=>{
    let products = await Product.find({});
    console.log("Tous les produits recuperes");
    res.send(products);
})
//POURADMIN FIN

//Point de terminaision pour les newProduits
app.get('/newProduits',async (req,res)=>{
    let products = await Product.find({});
    let new_Produits= products.slice(1).slice(-8);
    console.log("Nouveaux Produits recuperees");
    res.send(new_Produits);
})
//Point de terminaision pour les produitsPopulaires chez les femmes
app.get('/popularinwomen',async (req,res)=>{
    let products = await Product.find({category:"Femme"});
    let popular_in_women= products.slice(0,4);
    console.log("Nouveaux Produits recuperees");
    res.send(popular_in_women);
})




//création de middleware pour recuper les utilisateurs
const fetchUser = async (req,res,next)=>{
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({errors:"veuillez vous authentifier en utilisant un jeton valide"})
    }else{
        try{
            const data =jwt.verify(token,process.env.SECRET);
            req.user = data.user;
            next();
        }catch (error){
            res.status(401).send({errors:"veuillez vous authentifier en utilisant un jeton valide"})
        }
    }
}

//PANIER
//Point de terminaision pour lajout des produits dans le PANIER
app.post('/ajouteraupanier',fetchUser,async (req,res)=>{
    console.log(req.body ,  req.user);
    // Ici, tu peux utiliser req.user pour associer le produit à l'utilisateur
    let userData = await Users.findOne({});
    userData.panierData[req.body.itemId] += 1;
    await Users.findOneAndUpdate({_id:req.user.id},{panierData:userData.panierData});
    res.send('Ajouté')
})
//Point de terminaision pour supprimer des produits dans le PANIER
app.post('/supprimerdupanier',fetchUser,async (req,res)=>{
    console.log("Supprimé" , req.body.itemId);
    let userData = await Users.findOne({});
    if (userData.panierData[req.body.itemId]>0)
    userData.panierData[req.body.itemId] -= 1;
    await Users.findOneAndUpdate({_id:req.user.id},{panierData:userData.panierData});
    res.send('Supprimé')
})
//Point de terminaision pour recuperer tous les produits du PANIER
app.post('/getPanier',fetchUser,async (req,res)=>{
    console.log('Panier récupéré');
    let userData = await Users.findOne({_id:req.user.id});
    res.json(userData.panierData);
})

//Modele dutilisateur
const Users = mongoose.model("Users",{
    name:{
        type:String,
    },
    email:{
        type: String ,
        unique: true,
    },
    number:{
        type:String,
        unique: true,
    },
    password:{
        type:String,
    },
    panierData:{
        type:Object,
    },
    hasCommandé: { type: Boolean, default: false },
    date:{
        type:Date,
        default:Date.now,
    }
})

//Point de terminaision pour lenregistrement dutilisateur
app.post('/signup',async (req,res)=>{
    let info = await Users.findOne({email:req.body.email});
    if (info) {
        return res.status(400).json({
            success:false,
            errors:'Utilisateur deja existant',
        })
    }
    let panier = {};
    for(let i = 0; i < 300; i++){
        panier[i]=0;
    }
    
    const user = new Users({
        name:req.body.username,
        email:req.body.email,
        number:req.body.number,
        password:req.body.password,
        panierData:panier,
    })
    await user.save();

    const data = {
        user:{
            id:user.id
        }
    }
    const token = jwt.sign(data, process.env.SECRET);
    res.json({success:true,token})
})
//Point de terminaision pour la connexion dutilisateur
app.post('/login',async (req,res)=>{
    let user = await Users.findOne({email:req.body.email});
    if (user) {
        const passCompare = req.body.password === user.password;
        if (passCompare) {
            const data = {
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data, process.env.SECRET);
            res.json({success:true,token})
        }else{
            res.json({
                success:false,
                errors:"Mauvais mot de passe"
            });
        }
    }else{
        res.json({
            success:false,
            errors:"Mauvais email"
        });
    }
})



app.post('/ajoutercommande', fetchUser, async (req, res) => {
    const { products, totalPrice } = req.body;
    console.log('Données reçues:', { products, totalPrice });  
    console.log('Données reçues:', req.body);
  
    const user = await Users.findById(req.user.id);
    if (!user) return res.status(404).json({ message: 'Utilisateur non trouvé' });
  
    const newCommande = new Commandes({
      user: req.user.id,
      products: products.map(p => ({
        productId: p.productId,
        quantity: p.quantity,
        name: p.name, // Inclure le nom du produit
      })),
      totalPrice,
    });
  
    await newCommande.save();
  
    user.hasCommandé = true;
    await user.save();
  
    res.status(201).json({ message: 'Commande enregistrée avec succès', commande: newCommande ,
        utilisateur: {
            name: user.name,
            number: user.number
          }
    });
  });
  
  
// Route pour récupérer toutes les commandes sans authentification
app.get('/getAllCommandes', async (req, res) => {
    const commandes = await Commandes.find().populate('user', 'name number');

    if (!commandes.length) {
        return res.status(404).json({ message: 'Aucune commande trouvée' });
    }

    res.status(200).json({ commandes });
});



app.listen(PORT,(error)=>{
    if (!error){
        console.log("Server Running on Port " +PORT)
    }
    else{
        console.log("Error:" +error)
    }
})
