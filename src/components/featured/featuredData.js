import { v4 as uuid } from "uuid";
import { dress1, bottom5, ethnic2, top5, bottom3 } from "../../assets";

export const featuredData = [
  {
    _id: uuid(),
    title: "Boning A-line Dress",
    image: dress1,
    brand: "Urbanic",
    price: "1890",
    originalPrice: "2180",
    ratings: {
      value: "4.4",
      count: "1.2k",
    },
    categoryName: "Dresses",
    outOfStock: false,
    quantity: 0,
  },
  {
    _id: uuid(),
    title: "Pocket Straight Leg Pants",
    image: bottom5,
    brand: "Dolce & Gabbana",
    price: "2390",
    originalPrice: "2999",
    ratings: {
      value: "4.7",
      count: "2.5k",
    },
    categoryName: "Bottoms",
    outOfStock: false,
    quantity: 0,
  },
  {
    _id: uuid(),
    title:
      "Women Navy Blue Straight Screen Print Pure Cotton Kurta & Palazzos With Dupatta",
    image: ethnic2,
    brand: "Tokyo Talkies",
    price: "1499",
    originalPrice: "1979",
    ratings: {
      value: "4",
      count: "496",
    },
    categoryName: "Ethnic",
    outOfStock: false,
    quantity: 0,
  },
  {
    _id: uuid(),
    title: "Olive Green & Beige Floral Georgette Blouson Top",
    image: top5,
    brand: "Urbanic",
    price: "759",
    originalPrice: "1239",
    ratings: {
      value: "4.7",
      count: "4k",
    },
    categoryName: "Tops",
    outOfStock: false,
    quantity: 0,
  },
  {
    _id: uuid(),
    title: "Women Wide Twill Trousers",
    image: bottom3,
    brand: "H&M",
    price: "999",
    originalPrice: "1799",
    ratings: {
      value: "4.4",
      count: "1.7k",
    },
    categoryName: "Bottoms",
    outOfStock: false,
    quantity: 0,
  },
];
