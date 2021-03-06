import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import {Lock, User, UserSmall} from '../../assets'
import { colors } from '../../utils/colors'

const ResetPassword = ({navigation}) => {
    const [borderEmail, setBorderEmail] = useState('grey')
    const [borderPass, setBorderPass] = useState('grey')    
    return (
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
            <View style={styles.container}>
                <View style={styles.user}>
                    <Image source={User} />
                </View>
                {/* form inputt section */}
                <View style={{...styles.formInput, borderColor: borderEmail, marginTop: 40}}>
                    <Image source={Lock} style={{marginRight: 10}} />
                    <TextInput onChange={() => {
                        setBorderEmail(colors.main)
                    }} placeholder="Create New Password" style={{color: colors.main}}/>
                </View>
                <View style={{...styles.formInput, borderColor: borderPass}}>
                    <Image source={Lock} style={{marginRight: 10}} />
                    <TextInput onChange={() => {
                        setBorderPass(colors.main)
                    }} placeholder="New Password" secureTextEntry={true} style={{color: colors.main}}/>
                </View>
                <View>
                    <TouchableOpacity style={styles.btn} onPress={() => {
                        navigation.replace('Login')
                    }}>
                        <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>Reset Password</Text>
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

export default ResetPassword
