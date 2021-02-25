import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Home = ({navigation}) => {
    return (
        <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
            <Text>INi adalah halaman Home</Text>
            <TouchableOpacity onPress={() => {
                navigation.navigate("Login")
            }}>
                <Text>Go to Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home
