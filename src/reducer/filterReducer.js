export const filterReducer = (state, action) => {
    switch(action.type) {
        case "FILTER_BY_CATEGORY":
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
        default:
            return state
    }
}