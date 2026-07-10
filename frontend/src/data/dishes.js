import bacalhauImage from "../assets/images/menu-bacalhau.avif";
import polvoImage from "../assets/images/menu-polvo.avif";
import sobremesaImage from "../assets/images/menu-sobremesa.avif";

export const featuredDishes = [
  {
    id: 1,
    name: "Bacalhau Macieira",
    category: "Principal",
    price: "38€",
    description: "Bacalhau confitado, grão, broa e azeite de ervas.",
    image: bacalhauImage,
    featured: true,
  },
  {
    id: 2,
    name: "Polvo à Brasa",
    category: "Principal",
    price: "42€",
    description: "Polvo atlântico, batata a murro e pimento assado.",
    image: polvoImage,
  },
  {
    id: 3,
    name: "Pera Rocha",
    category: "Sobremesa",
    price: "14€",
    description: "Pera, vinho do Porto e especiarias.",
    image: sobremesaImage,
  },
];