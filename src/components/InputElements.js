import React from 'react'
import {View, TextInput, Button, StyleSheet} from 'react-native'

const InputElements = (props) => {
    return(
        <View style={styles.input}>
          <TextInput style={styles.textInput} placeholder="Destination" onChangeText={props.textInput}/>
          <Button title="Add" onPress={props.addPlace}/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        padding: 30,
        justifyContent: 'space-between',
        flexDirection: "row",
        alignItems: 'center',
      },
      textInput:{
        width: "70%",
        borderColor: "black",
        borderWidth: 2
      },
})

export default InputElements