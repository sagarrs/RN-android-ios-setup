import React from 'react'
import {View, StyleSheet, Text, FlatList, Image, ScrollView} from 'react-native'

const DisplayText = (props) => {
    return(
        // THIS IS HOW YOU USE "ScrollView"

        // <ScrollView>
        //     {
        //         props.places.map((place, i) => {
        //             return(
        //                 <View key={i} style={styles.show}>
        //                     <Image style={styles.img} source={{uri: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201903/Bugatti_Front.png?P6nkPQ7HNTeFEs8Oyd57_c3j7i8bYsgI"}}/>
        //                     <Text style={styles.txt} onPress={() => {props.removePlace(i)}}>{place}</Text>
        //                 </View>
        //             )
        //         })
        //     }
        // </ScrollView>

        // THIS IS hOW YOU USE FlatList. // more is explained in the notes
        <FlatList
            data={props.places}
            renderItem={(info) => {
                return(
                    <View style={styles.show}>
                        <Image style={styles.img} source={{uri: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201903/Bugatti_Front.png?P6nkPQ7HNTeFEs8Oyd57_c3j7i8bYsgI"}}/>
                        <Text style={styles.txt} onPress={() => {props.selectPlace(info.item.key)}}>{info.item.value}</Text>
                    </View>
                )
            }}
        />
    )
}

const styles = StyleSheet.create({
    displayText: {
        width: "100%",
        backgroundColor: "#eee",
        margin: 15,
        flexDirection: 'column',
        justifyContent: "space-between"
        // alignItems: "center"
      },
    txt: {
        fontWeight: "bold",
        fontSize: 20,
        margin: 8
    },
    img: {
        height: 50,
        width: 50
    },
    show:{
        flexDirection: "row"
    }
})

export default DisplayText