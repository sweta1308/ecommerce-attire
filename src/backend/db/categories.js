import { v4 as uuid } from "uuid";
import {top1, bottom1, dress1, ethnic1} from '../../assets';

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Tops",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
    image: top1,
  },
  {
    _id: uuid(),
    categoryName: "Bottoms",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
    image: bottom1
  },
  {
    _id: uuid(),
    categoryName: "Dresses",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
    image: dress1
  },
  {
    _id: uuid(),
    categoryName: "Ethnic",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
    image: ethnic1
  },
];
