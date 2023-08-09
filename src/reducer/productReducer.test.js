import { productReducer } from "./productReducer";
import { bottom5, top1 } from "../assets";

describe("product testing", () => {
  it("should set product loading", () => {
    const initialState = { isProductLoading: false };

    const action = {
      type: "products_loading",
      payload: true,
    };

    const state = productReducer(initialState, action);

    expect(state).toEqual({ isProductLoading: true });
  });

  it("should set categories loading", () => {
    const initialState = { isCategoryLoading: false };

    const action = {
      type: "categories_loading",
      payload: true,
    };

    const state = productReducer(initialState, action);

    expect(state).toEqual({ isCategoryLoading: true });
  });

  it("should set details loading", () => {
    const initialState = { isDetailLoading: false };

    const action = {
      type: "detail_loading",
      payload: true,
    };

    const state = productReducer(initialState, action);

    expect(state).toEqual({ isDetailLoading: true });
  });

  it("should set all products", () => {
    const initialState = { productData: [] };

    const action = {
      type: "set_products",
      payload: [
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
      ],
    };

    const state = productReducer(initialState, action);

    const expectedState = {
      productData: [
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
      ],
    };

    expect(state).toEqual(expectedState);
  });

  it("should set all categories", () => {
    const initialState = { categoriesData: [] };

    const action = {
      type: "set_category",
      payload: [
        {
          _id: "drdiw283_i2iw_i2jw_iwjjie92",
          categoryName: "Tops",
          description:
            "literature in the form of prose, especially novels, that describes imaginary events and people",
          image: top1,
        },
      ],
    };

    const state = productReducer(initialState, action);

    const expectedState = {
      categoriesData: [
        {
          _id: "drdiw283_i2iw_i2jw_iwjjie92",
          categoryName: "Tops",
          description:
            "literature in the form of prose, especially novels, that describes imaginary events and people",
          image: top1,
        },
      ],
    };

    expect(state).toEqual(expectedState);
  });
});
