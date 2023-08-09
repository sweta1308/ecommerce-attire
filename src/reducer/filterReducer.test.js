import { filterReducer } from "./filterReducer";

describe("filters testing", () => {
  it("should filter the products by category", () => {
    const initialState = { category: ["Tops"] };

    const action = {
      type: "filter_by_category",
      payload: "Bottoms",
    };

    const state = filterReducer(initialState, action);

    const expectedState = { category: ["Tops", "Bottoms"] };

    expect(state).toEqual(expectedState);
  });

  it("should filter the products by brand", () => {
    const initialState = { brands: ["H&M", "Zara"] };

    const action = {
      type: "filter_by_brands",
      payload: "Urbanic",
    };

    const state = filterReducer(initialState, action);

    const expectedState = { brands: ["H&M", "Zara", "Urbanic"] };

    expect(state).toEqual(expectedState);
  });

  it("should filter the products by rating", () => {
    const initialState = { rating: 5 };

    const action = {
      type: "filter_by_rating",
      payload: 3,
    };

    const state = filterReducer(initialState, action);

    const expectedState = { rating: 3 };

    expect(state).toEqual(expectedState);
  });

  it("should filter the products by price", () => {
    const initialState = { sort: "featured" };

    const action = {
      type: "filter_by_sort",
      payload: "high-to-low",
    };

    const state = filterReducer(initialState, action);

    const expectedState = { sort: "high-to-low" };

    expect(state).toEqual(expectedState);
  });

  it("should filter the products by search", () => {
    const initialState = { search: "zara" };

    const action = {
      type: "filter_by_search",
      payload: "urbanic",
    };

    const state = filterReducer(initialState, action);

    const expectedState = { search: "urbanic" };

    expect(state).toEqual(expectedState);
  });

  it("should filter the products by availability", () => {
    const initialState = { includeOutOfStock: false };

    const action = {
      type: "filter_by_availability",
      payload: true,
    };

    const state = filterReducer(initialState, action);

    const expectedState = { includeOutOfStock: true };

    expect(state).toEqual(expectedState);
  });

  it("should clear all the filters", () => {
    const initialState = {
      category: ["Tops", "Bottoms"],
      brands: ["Zara", "Tokyo Talkies", "Roadster"],
      rating: 5,
      sort: "high-to-low",
      search: "ethnic",
      includeOutOfStock: true,
    };

    const action = {
      type: "clear_filters",
    };

    const state = filterReducer(initialState, action);

    const expectedState = {
      category: [],
      brands: [],
      rating: 5,
      sort: "featured",
      search: "",
      includeOutOfStock: false
    };

    expect(state).toEqual(expectedState);
  });
});
