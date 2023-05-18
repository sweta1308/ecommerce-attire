export const filterReducer = (state, action) => {
    switch(action.type) {
        case "filter_by_category":
            return state.category.includes(action.payload)
            ? {
                ...state,
                category: [...state.category].filter(
                  (item) => item !== action.payload
                )
              }
            : {
                ...state,
                category: [...state.category, action.payload]
              };

        case "filter_by_brands":
            return state.brands.includes(action.payload)
            ? {
                ...state,
                brands: [...state.brands].filter(
                  (item) => item !== action.payload
                )
              }
            : {
                ...state,
                brands: [...state.brands, action.payload]
              };
        
        case 'rating':
            return {...state, rating: action.payload}

        case "clear_filters":
            return {
                category: [], 
                brands: [],
                rating: 5,
                sort: ''
            }
        default:
            return state
    }
}