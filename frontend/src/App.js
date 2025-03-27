
import './App.css';
import  {Navbar}  from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Shop } from './Pages/Shop';
import { ShopCategory } from './Pages/ShopCategory';
import { Product } from './Pages/Product';
import { Panier } from './Pages/Panier';
import { LoginSignup } from './Pages/LoginSignup';
import { Footer } from './Components/Footer/Footer';
import fond_femme from './Components/Assets/fond_femme.png'
import fond_enfant from './Components/Assets/fond_enfant.png'
import fond_homme from './Components/Assets/fond_homme.png'

function App() {
  const texte1="Découvrez notre sélection de soins et cosmétiques conçus spécialement pour les hommes modernes. Des produits de qualité pour une peau saine et un style affirmé."
  const texte2="Sublimez votre beauté naturelle avec notre gamme de cosmétiques dédiés aux femmes. Des soins innovants et des produits de haute qualité pour un éclat incomparable."
  const texte3="Prenez soin de la peau délicate de vos enfants avec nos produits doux et adaptés. Formules naturelles et sûres pour un bien-être optimal au quotidien."
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>} /> 
        <Route path="/men" element={<ShopCategory banner={fond_homme} texte={texte1} category="Homme" />} />
        <Route path="/women" element={<ShopCategory banner={fond_femme} texte={texte2} category="Femme"/>} /> 
        <Route path="/kids" element={<ShopCategory banner={fond_enfant} texte={texte3} category="Enfant"/>} /> 
        <Route path="/product" element={<Product/>} > 
          <Route path=":productId" element={<Product/>} /> 
        </Route>
        <Route path="/panier" element={<Panier/>} /> 
        <Route path="/login" element={<LoginSignup/>} /> 
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
