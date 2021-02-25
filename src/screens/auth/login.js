import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import {Lock, User, UserSmall} from '../../assets'
import { colors } from '../../utils/colors'

const Login = ({navigation}) => {
    const [borderEmail, setBorderEmail] = useState('grey')
    const [borderPass, setBorderPass] = useState('grey')    
    return (
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
            <View style={styles.container}>
                <View style={styles.user}>
                    <Image source={User} />
                </View>
                <View style={styles.txtContainer}>
                    <Text style={styles.title}>Welcome !</Text>
                    <Text style={{color: '#C4C4C4'}}>Log in to your exiting account.</Text>
                </View>

                {/* form inputt section */}
                <View style={{...styles.formInput, borderColor: borderEmail}}>
                    <Image source={UserSmall} style={{marginRight: 10}} />
                    <TextInput onChange={() => {
                        setBorderEmail(colors.main)
                    }} placeholder="examplexxx@gmail.com" style={{color: colors.main}}/>
                </View>
                <View style={{...styles.formInput, borderColor: borderPass}}>
                    <Image source={Lock} style={{marginRight: 10}} />
                    <TextInput onChange={() => {
                        setBorderPass(colors.main)
                    }} placeholder="password" secureTextEntry={true} style={{color: colors.main}}/>
                </View>
                <View style={{width: 319, alignItems: 'flex-end'}}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('ForgotPassword')
                    }}>
                        <Text style={{color: 'grey'}}>Forgot Password ?</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop: 44}}>
                    <TouchableOpacity style={styles.btn} onPress={() => {
                        navigation.replace('Home')
                    }}>
                        <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>LOG IN</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', marginTop: 20}}>
                    <Text>Don’t have an account? </Text>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Register')
                    }}>
                        <Text style={{color: colors.main}}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container : {
        alignItems: 'center',
    },
    user : {
        height: 180,
        width: 180,
        borderRadius: 90,
        backgroundColor: '#C4C4C4',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60
    },
    txtContainer : {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 46,
        marginBottom: 40
    },
    title : {
        color: colors.main,
        fontSize: 18,
        fontWeight: 'bold'
    },
    formInput : {
        height: 60,
        width: 319,
        borderRadius: 10,
        borderColor: colors.main,
        borderWidth: 1,
        backgroundColor: '#F5F5F5',
        alignItems : 'center',
        paddingHorizontal: 20,
        flexDirection: 'row',
        marginBottom: 20
    },
    btn : {
        height: 60,
        width: 319,
        borderRadius: 10,
        backgroundColor: colors.main,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Login
