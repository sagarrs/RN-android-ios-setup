import React from 'react'
import {View, Modal, Image, Text, Button, StyleSheet} from 'react-native'

const PlaceDetail = (props) => {
    // let modalContent = null

    // if(props.selectedPlace){
    //     modalContent = (
    //         <View>
    //             <Text style={styles.txtStyle}>{props.selectedPlace.value}</Text>
    //             <Image source={props.selectedPlace.image} style={styles.imgStyle}/>
    //         </View>
    //     )
    // }

    // return(
    //     <Modal 
    //         visible={props.selectedPlace !== null} 
    //         animationType="slide"
    //         onRequestClose={props.onModalClosed}
    //     >
    //         <View style={styles.modalContainer}>
    //             {modalContent}
    //             <View style={styles.btnContainer}>
    //                 <Button title="Delete" color="red" onPress={props.onItemDeleted}/>
    //                 <Button title="Close" onPress={props.onModalClosed}/>
    //             </View>
    //         </View>
    //     </Modal>
    // )

    // The below code is used to render the elements if the props.selectedPlace is not null
    // you can also do it inside return statement by using ternary operator

    //props.selectedPlace ? (<view>all text and image tags</view>) : null

    let modalContent = null

    if(props.selectedPlace){
        modalContent = (
            <View>
                <Image style={styles.imgStyle} source={{uri: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201903/Bugatti_Front.png?P6nkPQ7HNTeFEs8Oyd57_c3j7i8bYsgI"}}/>
                <Text>{props.selectedPlace.value}</Text>
            </View>
        )
    }
    return( 
        <Modal 
            visible={props.selectedPlace !== null}
            animationType="slide"
            >
            <View>
                {modalContent}
                <View style={styles.btnContainer}>
                    <Button title="delete" color="red" onPress={props.onItemDeleted}/>
                    <Button title="close" color="blue" onPress={props.onModalClosed}/>
                </View>
            </View>
        </Modal>   
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        margin: 22
    },
    btnContainer:{
        flexDirection: "column",
        justifyContent: 'space-between'
    },
    imgStyle:{
        height: 50,
        width: 50
    },
    txtStyle: {
        fontWeight: "bold",
        fontSize: 28,
        textAlign: "center"
    }
})

export default PlaceDetail