import React, { useEffect, useState } from 'react';
import "./Commandes.css"

const Commandes = () => {
    const [commandes, setCommandes] = useState([]);
    const API_URL = "https://ecommerce1-backend-wj82.onrender.com";
    useEffect(() => {
        fetch(`${API_URL}/getAllCommandes`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur réseau lors du chargement des commandes');
                }
                return response.json();
            })
            .then(data => {
                setCommandes(data.commandes);
            })
            .catch(error => {
                console.error('Erreur lors du chargement des commandes:', error);
            });
    }, []);

    return (
        <div>
            <h1>Commandes</h1>
            {commandes.length > 0 ? (
                <div className="order-list">
                    {commandes.map((commande) => (
                        <div key={commande._id} className="order-item">
                            <h2>Commande #{commande._id}</h2>
                            <p><strong>Client :</strong> {commande.user?.name} 📞 {commande.user?.number}</p>
                            <div>
                                <h3>Produits :</h3>
                                <ul>
                                    {commande.products.map((product, index) => (
                                        <li key={index}>
                                            {product.name} Quantité: {product.quantity}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p><strong>Total :</strong> {commande.totalPrice} F</p>
                        </div>
                    ))}
                </div>
            ) : (
                <div>Aucune commande trouvée.</div>
            )}
        </div>
    );
};

export default Commandes;
