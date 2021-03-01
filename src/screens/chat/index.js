import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { ComingSoon } from '../../assets'

const Chat = () => {
    return (
        <View style={styles.container}> 
            <Image source={ComingSoon} style={styles.img} />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    img : {
        height: 250,
        width: 300
    }
})

export default Chat
