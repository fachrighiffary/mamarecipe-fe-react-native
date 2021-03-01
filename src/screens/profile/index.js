import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'
import {colors} from '../../utils/colors'
import {BookMark, IconNext, Liked, MyRecipe, PhotoProfile, UserSmall} from '../../assets'

const Profile = ({navigation}) => {
    return (
        <View style={styles.container}> 
            <View style={styles.header}>
                <Image style={styles.img} source={PhotoProfile} />
                <Text style={{marginTop: 20, fontSize: 16, fontWeight: 'bold', color: 'white'}}>Fachri Ghiffary</Text>
            </View>
            <View style={styles.footer}>
                <View style={styles.body}>
                    <TouchableOpacity activeOpacity={0.6} style={styles.section} onPress={() => {
                        navigation.navigate('EditProfile')
                    }}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={UserSmall} />
                            <Text style={{marginLeft: 19, fontWeight: 'bold'}}>Edit Profile</Text>
                        </View>
                        <Image source={IconNext}/>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6} style={styles.section} onPress={() => {
                        navigation.navigate('MyRecipe')
                    }}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={MyRecipe} />
                            <Text style={{marginLeft: 19, fontWeight: 'bold'}}>My Recipe</Text>
                        </View>
                        <Image source={IconNext} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6} style={styles.section} onPress={() => {
                        navigation.navigate('SavedRecipe')
                    }}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={BookMark} />
                            <Text style={{marginLeft: 19, fontWeight: 'bold'}}>Saved Recipe</Text>
                        </View>
                        <Image source={IconNext} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6} style={styles.section} onPress={() => {
                        navigation.navigate('LikedRecipe')
                    }}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={Liked} />
                            <Text style={{marginLeft: 19, fontWeight: 'bold'}}>Liked Recipe</Text>
                        </View>
                        <Image source={IconNext} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1
    },
    img: {
        height: 84,
        width: 84,
        borderRadius: 50
    },
    header : {
        backgroundColor: colors.main,
        height : 308,
        width : '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    body : {
        width: 360,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flex: 1,
        backgroundColor: 'white',
        marginTop: -50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    section : {
        height: 64,
        width: '100%',
        padding: 27,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})


export default Profile
