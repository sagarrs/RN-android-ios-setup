import {createStore, combineReducers} from 'redux'
import placeReducer from '../reducers/places'

const configureStore = () => {
    const store = createStore(combineReducers({
        places: placeReducer
    }))
    return store
}

export default configureStore