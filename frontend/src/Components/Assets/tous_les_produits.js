import p1_img from './produit1.png'
import p2_img from './produit2.png'
import p3_img from './produit3.png'
import p4_img from './produit4.png'
import p5_img from "./produit5.png";
import p6_img from "./produit6.png";
import p7_img from "./produit7.png";
import p8_img from "./produit8.png";
import p9_img from "./produit9.png";
import p10_img from "./produit10.png";
import p11_img from "./produit11.png";
import p12_img from "./produit12.png";
import p13_img from "./produit13.png";
import p14_img from "./produit14.png";
import p15_img from "./produit15.png";
import p16_img from "./produit16.png";
import p17_img from "./produit17.jpg";
import p18_img from "./produit18.png";
import p19_img from "./produit19.png";
import p20_img from "./produit20.jpg";
import p21_img from "./produit21.png";
import p22_img from "./produit22.png";
import p23_img from "./produit23.png";
import p24_img from "./produit24.png";
import p25_img from "./produit25.png";
import p26_img from "./produit26.png";
import p27_img from "./produit27.jpg";
import p28_img from "./produit28.png";
import p29_img from "./produit29.jpg";
import p30_img from "./produit30.jpg";
import p31_img from "./produit31.jpg";
import p32_img from "./produit32.jpg";
import p33_img from "./produit33.jpg";
import p34_img from "./produit34.png";
import p35_img from "./produit35.jpg";
import p36_img from "./produit36.png";

let all_product = [
  {
    id:1,
    name:"Sol De Janeiro",
    category: "Femme",
    image:p1_img,
    new_price:10000,
    old_price:12000,
  },
  {
    id:2,
    name:"Coco Radian Body Lotion",
    category: "Femme",
    image:p2_img,
    new_price:7500,
    old_price:10000,
  },
  {
    id:3,
    name:"The Ordinary",
    category: "Femme",
    image:p3_img,
    new_price:10000,
    old_price:15000,
  },
  {
    id:4,
    name:"Cerave Gel Moussant",
    category: "Femme",
    image:p4_img,
    new_price:10000,
    old_price:12000,
  },
  {
    id: 5,
    name: "Gloss",
    category: "Femme",
    image: p5_img,
    new_price: 1000,
    old_price: 1500,
  },
  {
    id: 6,
    name: "Lait de corps Topicrem",
    category: "Femme",
    image: p6_img,
    new_price: 5000,
    old_price: 7000,
  },
  {
    id: 7,
    name: "Parfum La Vie Est Belle",
    category: "Femme",
    image: p7_img,
    new_price: 12000,
    old_price: 15000,
  },
  {
    id: 8,
    name: "Dove Deodorant",
    category: "Femme",
    image: p8_img,
    new_price: 2000,
    old_price: 2500,
  },
  {
    id: 9,
    name: "Les Petits Plaisirs Eau rose",
    category: "Femme",
    image: p9_img,
    new_price: 5000,
    old_price: 8000,
  },
  {
    id: 10,
    name: "Lait de corps Evoluderm",
    category: "Femme",
    image: p10_img,
    new_price: 10000,
    old_price: 12000,
  },
  {
    id: 11,
    name: "Coco radian Huile",
    category: "Femme",
    image: p11_img,
    new_price: 5000,
    old_price: 7000,
  },
  {
    id: 12,
    name: "Labello fraise",
    category: "Femme",
    image: p12_img,
    new_price: 3000,
    old_price: 3500,
  },
  {
    id: 13,
    name: "Men Nivea Lait de corps",
    category: "Homme",
    image: p13_img,
    new_price: 5000,
    old_price: 8000,
  },
  {
    id: 14,
    name: "Men Nivea Deodorant",
    category: "Homme",
    image: p14_img,
    new_price: 8000,
    old_price: 10000,
  },
  {
    id: 15,
    name: "Men Nova",
    category: "Homme",
    image: p15_img,
    new_price: 7000,
    old_price: 10000,
  },
  {
    id: 16,
    name: "Men Nivea Gel Douche",
    category: "Homme",
    image: p16_img,
    new_price: 8000,
    old_price: 10000,
  },
  {
    id: 17,
    name: "Mixa Lait de corps",
    category: "Homme",
    image: p17_img,
    new_price: 10000,
    old_price: 12000,
  },
  {
    id: 18,
    name: "Men Nivea Creme",
    category: "Homme",
    image: p18_img,
    new_price: 8000,
    old_price: 10000,
  },
  {
    id: 19,
    name: "Baume Avéne",
    category: "Homme",
    image: p19_img,
    new_price: 12000,
    old_price: 15000,
  },
  {
    id: 20,
    name: "Labello",
    category: "Homme",
    image: p20_img,
    new_price: 2000,
    old_price: 2500,
  },
  {
    id: 21,
    name: "Parfum Genlemen Givenchy",
    category: "Homme",
    image: p21_img,
    new_price: 20000,
    old_price: 25000,
  },
  {
    id: 22,
    name: "Rasoir Gillette",
    category: "Homme",
    image: p22_img,
    new_price: 4000,
    old_price: 5000,
  },
  {
    id: 23,
    name: "Creme Cerave",
    category: "Homme",
    image: p23_img,
    new_price: 8000,
    old_price: 10000,
  },
  {
    id: 24,
    name: "Vaseline Lait de corps",
    category: "Homme",
    image: p24_img,
    new_price: 9000,
    old_price: 12000,
  },
  {
    id: 25,
    name: "Mixa Lait de corps",
    category: "Enfant",
    image: p25_img,
    new_price: 11000,
    old_price: 12000,
  },
  {
    id: 26,
    name: "Babymed eau de cologne",
    category: "Enfant",
    image: p26_img,
    new_price: 3000,
    old_price: 4000,
  },
  {
    id: 27,
    name: "Babymed lait de corps",
    category: "Enfant",
    image: p27_img,
    new_price: 6000,
    old_price: 7000,
  },
  {
    id: 28,
    name: "Babymed lingettes",
    category: "Enfant",
    image: p28_img,
    new_price: 1500,
    old_price: 2000,
  },
  {
    id: 29,
    name: "Daybyday lait de corps",
    category: "Enfant",
    image: p29_img,
    new_price: 2000,
    old_price: 3000,
  },
  {
    id: 30,
    name: "Daybyday huile",
    category: "Enfant",
    image: p30_img,
    new_price: 1500,
    old_price: 2000,
  },
  {
    id: 31,
    name: "Babymed gel douche",
    category: "Enfant",
    image: p31_img,
    new_price: 3000,
    old_price: 3500,
  },
  {
    id: 32,
    name: "Babymed talc",
    category: "Enfant",
    image: p32_img,
    new_price: 1500,
    old_price: 2000,
  },
  {
    id: 33,
    name: "Babymed savon",
    category: "Enfant",
    image: p33_img,
    new_price: 2000,
    old_price: 2500,
  },
  {
    id: 34,
    name: "Biolane eau de toilette",
    category: "Enfant",
    image: p34_img,
    new_price: 10000,
    old_price: 12000,
  },
  {
    id: 35,
    name: "Biolane creme",
    category: "Enfant",
    image: p35_img,
    new_price: 12000,
    old_price: 15000,
  },
  {
    id: 36,
    name: "Parfum klorane bebe",
    category: "Enfant",
    image: p36_img,
    new_price: 8000,
    old_price: 10000,
  },
];

export default all_product;
