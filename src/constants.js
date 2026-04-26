import manga from '/mangas.png';
import figures from '/figures.png';
import clothing from '/clothes.png';
import accessories from '/accessories.png';


import chainsawman from '/products/chainsaw.png';
import gojo from '/products/gojo.png';
import demonslayer from '/products/demonslayer.png';
import Aot from '/products/AOT.png';
import akira from '/products/akira.png';
import pendentif from '/products/pendentif.png';



export const CATEGORIES = [
  { id: 'manga', name: 'Manga', image: manga },
  { id: 'figures', name: 'Figurines', image: figures },
  { id: 'clothing', name: 'Vêtements', image: clothing },
  { id: 'accessories', name: 'Accessoires', image: accessories },
];

export const PRODUCTS = [
  {
    id: 1,
    name: "Chainsaw Man Vol. 1",
    category: "manga",
    price: 1500,
    image: chainsawman,
    description: "Denji est un jeune homme pauvre qui ferait n'importe quoi pour de l'argent, même chasser des démons avec son chien-démon Pochita.",
    isNew: true,
  },
  {
    id: 2,
    name: "Figurine Gojo Satoru",
    category: "figures",
    price: 25000,
    image: gojo,
    description: "Figurine hautement détaillée à l'échelle 1/7 de Satoru Gojo de Jujutsu Kaisen.",
    isNew: true,
  },
  {
    id: 3,
    name: "Hoodie Akira Neo-Tokyo",
    category: "clothing",
    price: 6500,
    image: akira,
    description: "Hoodie en coton premium mettant en vedette le logo iconique de la pilule Akira.",
    isNew: false,
  },
  {
    id: 4,
    name: "Pendentif Marque du Sacrifice",
    category: "accessories",
    price: 2500,
    image: pendentif,
    description: "Pendentif en acier inoxydable représentant la Marque du Sacrifice de Berserk.",
    isNew: false,
  },
  {
    id: 5,
    name: "Coffret Demon Slayer: Kimetsu no Yaiba",
    category: "manga",
    price: 18000,
    image: demonslayer,
    description: "Coffret complet de la série comprenant les 23 volumes du manga à succès.",
    isNew: true,
  },
  {
    id: 6,
    name: "Veste Bataillon d'Exploration",
    category: "clothing",
    price: 9500,
    image: Aot,
    description: "Veste officielle de l'uniforme du Bataillon d'Exploration avec les ailes de la liberté brodées.",
    isNew: false,
  }
];
