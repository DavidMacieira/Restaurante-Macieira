import bacalhauImage from "../assets/images/menu-bacalhau.avif";
import polvoImage from "../assets/images/menu-polvo.avif";
import sobremesaImage from "../assets/images/menu-sobremesa.avif";

export const featuredDishes = [
  {
    id: 1,
    name: "Bacalhau Macieira",
    nameEn: "Macieira Cod",
    category: "Principal",
    categoryEn: "Main course",
    price: "38€",
    description: "Bacalhau confitado, grão, broa e azeite de ervas.",
    descriptionEn: "Confit cod, chickpeas, cornbread and herb-infused olive oil.",
    image: bacalhauImage,
    featured: true,
  },
  {
    id: 2,
    name: "Polvo à Brasa",
    nameEn: "Grilled Octopus",
    category: "Principal",
    categoryEn: "Main course",
    price: "42€",
    description: "Polvo atlântico, batata a murro e pimento assado.",
    descriptionEn: "Atlantic octopus, crushed potatoes and roasted pepper.",
    image: polvoImage,
  },
  {
    id: 3,
    name: "Pera Rocha",
    nameEn: "Rocha Pear",
    category: "Sobremesa",
    categoryEn: "Dessert",
    price: "14€",
    description: "Pera, vinho do Porto e especiarias.",
    descriptionEn: "Pear, Port wine and spices.",
    image: sobremesaImage,
  },
];