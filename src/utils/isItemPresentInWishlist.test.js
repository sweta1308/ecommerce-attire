import { isItemInWishlist } from "./isItemPresentInWishlist";
import { bottom5, ethnic7, dress5, ethnic1 } from "../assets";

it("should search if that item is present in wishlist or not", () => {
  const data = [
    {
      _id: "7a4e5ba9-01ec-44f4-ad52-17fd34dc812e",
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
    },
    {
      _id: "76bc7877-8479-4169-8788-93e9a6e106be",
      title: "Ethnic Motifs Embroidered Sequinned Kurta with Trousers",
      image: ethnic7,
      brand: "Indya",
      price: "6999",
      originalPrice: "7599",
      ratings: {
        value: "4.7",
        count: "876",
      },
      categoryName: "Ethnic",
      outOfStock: false,
    },
    {
      _id: "a545421ec1-1252-6512-s215-rw552f52v",
      title: "Shirred A-Line Dress",
      image: dress5,
      brand: "Levis",
      price: "2199",
      originalPrice: "2870",
      ratings: {
        value: "1",
        count: "1.5k",
      },
      categoryName: "Dresses",
      outOfStock: true,
    },
    {
      _id: "tfqhje2-26e2-ed66-6122-hdyuge71321",
      title:
        "Women Charcoal Grey & Gold Ethnic Motifs Print Cotton Straight Kurta Palazzos Dupatta",
      image: ethnic1,
      brand: "Libas",
      price: "1379",
      originalPrice: "1899",
      ratings: {
        value: "4.5",
        count: "1k",
      },
      categoryName: "Ethnic",
      outOfStock: false,
    },
  ];

  const id = "a545421ec1-1252-6512-s215-rw552f52v";

  const findItem = isItemInWishlist(data, id)

  expect(findItem).toEqual(true)
});
