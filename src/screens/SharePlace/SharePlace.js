import React from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'

class SharePlace extends React.Component{
    render(){
        console.log(this.props)
        return(
            <View>
                <Text>This is share place</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        place: state
    }
}

export default connect(mapStateToProps)(SharePlace)