import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Profile = () => {
    return (
        <View style={styles.container}> 
            <Text>Ini adalah halaman profile</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: 'lightblue',
        flex: 1
    }
})


export default Profile
