import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native'
import {Bg1, Logo} from '../../assets'


const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('HomeScreen')
        }, 3000)
    })

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Image source={Bg1} style={styles.img} />
                <View style={styles.coverBg} opacity={0.4}></View>
                <View style={{position: 'absolute', alignItems: 'center'}}>
                    <Image source={Logo} style={styles.logo} />
                    <ActivityIndicator size='large' color='white' style={{marginTop: 40}}/>
                    <Text style={styles.txtSplash}>V.0.0.1</Text>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
    },
    body : {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    img: {
        height: "100%",
        width: '100%',
        position: 'relative'
    },
    coverBg : {
        height: "100%",
        width: '100%',
        backgroundColor: 'yellow',
        position: 'absolute'
    },
    txtSplash : {
        fontSize: 16,
        color: 'white',
        marginTop: 50
    }
})

export default Splash
