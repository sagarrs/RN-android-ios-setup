// import React from 'react'
// import {View, Text, TextInput, StyleSheet, Button} from 'react-native'

// import InputElements from './src/components/InputElements'
// import DisplayText from './src/components/DisplayText'
// import PlaceDetail from './src/components/PlaceDetail'

// class App extends React.Component{
//   constructor(){
//     super()
//     this.state = {
//       placeName: "",
//       places: [],
//       selectedPlace: null
//     }
//   }

//   addPlace = () => {
//     this.setState((prevState) => ({
//       places: prevState.places.concat(
//         {
//           key: Math.round(Math.random() * 10), 
//           value: this.state.placeName
//         })
//     }))
//   }

//   textInput = (val) => {
//     this.setState(() => ({
//       placeName: val
//     }))
//   }

//   selectPlace = (key) => {
//     this.setState((prevState) => ({
//       selectedPlace: prevState.places.find((place) => {
//         return place.key == key
//       })
//     }))
//   }

//   // -----------------------MODAL--------------------------
//   onModalClosed = () => {
//     this.setState(()=> ({
//       selectedPlace: null
//     }))
//   }

//   onItemDeleted = () => {
//     this.setState((prevState) => ({
//       // here insted of using prevState we can also use "this.state"
//       places: prevState.places.filter((place) => {
//         return place.key !== prevState.selectedPlace.key
//       }),
//       selectedPlace: null
//     }))   
//   }

//   render(){
//     return(
//       <View style={styles.main}>
//           <InputElements textInput={this.textInput} addPlace={this.addPlace}/>
//           <DisplayText places={this.state.places} selectPlace={this.selectPlace}/>
//           <PlaceDetail selectedPlace={this.state.selectedPlace} onModalClosed={this.onModalClosed} onItemDeleted={this.onItemDeleted}/>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   main:{
//     flexDirection: "column"
//   },
// })

// export default App


import {Navigation} from 'react-native-navigation'
import {Provider} from 'react-redux'
import configureStore from './src/redux/store/configureStore'
import {addPlace} from './src/redux/actions/places'

import AuthScreen from './src/screens/Auth/Auth'
import SharePlace from './src/screens/SharePlace/SharePlace'
import FindPlace from './src/screens/SharePlace/FindPlace'

const store = configureStore()

store.subscribe(() => {
  console.log(store.getState())
})

const place = {
  key: 1, palce: "blore",
}

store.dispatch(addPlace(place))

// Registering a screen
Navigation.registerComponent("awesome-places.AuthScreen", () => AuthScreen, store, Provider)
Navigation.registerComponent("awesome-places.SharePlace", () => SharePlace, store, Provider)
Navigation.registerComponent("awesome-places.FindPlace", () => FindPlace, store, Provider)

// start a app
Navigation.startSingleScreenApp({
  screen: {
    screen: "awesome-places.AuthScreen",
    title: "Login"
  }
})