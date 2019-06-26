import React from 'react'
import {View, Text, Button} from 'react-native'
import startTabs from '../MainTabs/startMainTabs'

class AuthScreen extends React.Component{

    handleTabs = () => {
        startTabs()
    }
    render(){
        return(
            <View>
                <Button title="login" onPress={this.handleTabs}/>
            </View>
        )
    }
}

export default AuthScreen