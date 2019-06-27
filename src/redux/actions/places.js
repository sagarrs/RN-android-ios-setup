export const addPlace = (place) => {
    return{
        type: "ADD_PLACE",
        payload: place
    }
}

export const deletePlace = () => {
    return{
        type: "DELETE_PLACE",
    }
}

export const selectPlace = (key) => {
    return{
        type: "SELECT_PLACE",
        payload: key
    }
}

export const unSelectPlace = () => {
    return{
        type: "UNSELECT_PLACE"
    }
}