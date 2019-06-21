import {ADD_PLACE, DELETE_PLACE, SELECT_PLACE, UNSELECT_PLACE} from '../actions/actionTypes'

const initialState = {
    places: [],
    selectedPlace: null
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat(
                    {
                      key: Math.random(), 
                      value: action.placeName,
                      image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201903/Bugatti_Front.png?P6nkPQ7HNTeFEs8Oyd57_c3j7i8bYsgI'
                    }
                  )
            }
        case DELETE_PLACE:
            return{
                ...stata,
                places: state.places.filter((place) => {
                    return place.key !== state.selectedPlace.key
                  }),
                  selectedPlace: null
            }
        case SELECT_PLACE:
            return{
                ...state,
                selectedPlace: state.places.find((place) => {
                    return(
                      place.key == placeKey
                    )
                  })
            }
        case UNSELECT_PLACE:
            return{
                ...state,
                selectedPlace: null
            }
        default :
            return state
    }
}

export default reducer