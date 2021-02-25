import React, {useState} from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput, ScrollView } from 'react-native'
import { IconBack, Lock, Mail, Phone, User1 } from '../../assets'
import { colors } from '../../utils/colors'

const Register = ({navigation}) => {
    const [borderName, setBorderName] = useState('grey')
    const [borderEmail, setBorderEmail] = useState('grey')
    const [borderPhone, setBorderPhone] = useState('grey')
    const [borderNewPass, setBorderNewPass] = useState('grey')
    const [borderPass, setBorderPass] = useState('grey')    
    return (
        <ScrollView style={{flex: 1, padding: 20}}>
            <View style={{width: 50}}>
                <TouchableOpacity>
                    <Image source={IconBack} />
                </TouchableOpacity>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 50}}>
                <Text style={{fontSize: 24, color: colors.main}}>Let’s Get Started !</Text>
                <Text style={{fontSize: 12, color: 'grey'}}>Create new account to access all feautures</Text>
            </View>

            {/* form input */}
            <View style={{...styles.formInput, borderColor: borderName, marginTop: 40}}>
                <Image source={User1} style={{marginRight: 10}} />
                <TextInput onChange={() => {
                    setBorderName(colors.main)
                }} placeholder="Name" style={{color: colors.main}}/>
            </View>
            <View style={{...styles.formInput, borderColor: borderEmail}}>
                <Image source={Mail} style={{marginRight: 10}} />
                <TextInput onChange={() => {
                    setBorderEmail(colors.main)
                }} placeholder="Email" style={{color: colors.main}}/>
            </View>
            <View style={{...styles.formInput, borderColor: borderPhone}}>
                <Image source={Phone} style={{marginRight: 10}} />
                <TextInput onChange={() => {
                    setBorderPhone(colors.main)
                }} placeholder="Phone Number" style={{color: colors.main}}/>
            </View>
            <View style={{...styles.formInput, borderColor: borderNewPass}}>
                <Image source={Lock} style={{marginRight: 10}} />
                <TextInput onChange={() => {
                    setBorderNewPass(colors.main)
                }} placeholder="Create New Password" secureTextEntry={true} style={{color: colors.main}}/>
            </View>
            <View style={{...styles.formInput, borderColor: borderPass}}>
                <Image source={Lock} style={{marginRight: 10}} />
                <TextInput onChange={() => {
                    setBorderPass(colors.main)
                }} placeholder="New Password" secureTextEntry={true} style={{color: colors.main}}/>
            </View>
            <View style={{marginTop: 44, alignSelf: 'center'}}>
                <TouchableOpacity style={styles.btn} onPress={() => {
                    navigation.replace('Login')
                }}>
                    <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>SignUp</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', marginTop: 20, alignSelf: 'center'}}>
                <Text>Already have account?  </Text>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Login')
                }}>
                    <Text style={{color: colors.main}}>Log in Here</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
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
        marginBottom: 20,
        alignSelf: 'center'
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

export default Register
