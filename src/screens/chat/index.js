import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Chat = () => {
    return (
        <View style={styles.container}> 
            <Text>Ini adalah halaman chat</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: 'pink',
        flex: 1
    }
})

export default Chat
