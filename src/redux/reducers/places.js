const initialPlaceState = []

const placeReducer = (state = initialPlaceState, action) => {
    switch(action.type){
        case "ADD_PLACE":
            return [...state, action.payload]
        default:
            return [...state]
    }
}

export default placeReducer