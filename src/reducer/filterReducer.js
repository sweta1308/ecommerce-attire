export const filterReducer = (state, action) => {
  switch (action.type) {
    case "filter_by_category":
      return state.category.includes(action.payload)
        ? {
            ...state,
            category: [...state.category].filter(
              (item) => item !== action.payload
            ),
          }
        : {
            ...state,
            category: [...state.category, action.payload],
          };

    case "filter_by_brands":
      return state.brands.includes(action.payload)
        ? {
            ...state,
            brands: [...state.brands].filter((item) => item !== action.payload),
          }
        : {
            ...state,
            brands: [...state.brands, action.payload],
          };

    case "filter_by_rating":
      return { ...state, rating: action.payload };

    case "filter_by_sort":
      return { ...state, sort: action.payload };

    case "filter_by_search":
      return { ...state, search: action.payload };

    case "filter_by_availability":
      return {...state, includeOutOfStock: action.payload}

    case "clear_filters":
      return {
        category: [],
        brands: [],
        rating: 5,
        sort: "featured",
        search: '',
        includeOutOfStock: false
      };
    default:
      return state;
  }
};
