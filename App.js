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

import AuthScreen from './src/screens/Auth/Auth'

Navigation.registerComponent("awesome-places.AuthScreen", () => AuthScreen)

Navigation.startSingleScreenApp({
  screen: {
    screen: "awesome-places.AuthScreen",
    title: "Login"
  }
})