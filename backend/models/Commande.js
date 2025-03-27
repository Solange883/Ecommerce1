const mongoose = require('mongoose');

const commandeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true },
  products: [{ 
    productId: { type: String, required: true }, // Accepte des chaînes au lieu de ObjectId
    quantity: { type: Number, required: true },
    name: { type: String, required: true }
  }],
  totalPrice: { type: Number, required: true },
  status: { type: String, default: 'En attente' }, // Statut de la commande
  createdAt: { type: Date, default: Date.now }
});

const Commandes = mongoose.model('Commandes', commandeSchema);
module.exports = Commandes;
