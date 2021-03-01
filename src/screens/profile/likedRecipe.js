import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { IconBack2, Myrecipe1, Myrecipe2 } from '../../assets'
import CardRecipe from '../../components/card/cardRecipe'
import { colors } from '../../utils/colors'

const LikedRecipe = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity activeOpacity={0.6} style={styles.back} onPress={() => {
                    navigation.goBack()
                }}>
                    <Image source={IconBack2} />
                </TouchableOpacity>
                <Text style={{fontSize: 20, color: colors.main}}>My Recipe</Text>
            </View>
            <ScrollView style={{marginTop: 35}}>
                <CardRecipe title="Margherita" user="In Veg Pizza" taste="Spicy" imgCard={Myrecipe1} />
                <CardRecipe title="Margherita" user="In Veg Pizza" taste="Spicy" imgCard={Myrecipe2} />
                <CardRecipe title="Margherita" user="In Veg Pizza" taste="Spicy" imgCard={Myrecipe1} />
                <CardRecipe title="Margherita" user="In Veg Pizza" taste="Spicy" imgCard={Myrecipe2} />
                <CardRecipe title="Margherita" user="In Veg Pizza" taste="Spicy" imgCard={Myrecipe1} />
            </ScrollView>

        </View>
    )
}
const styles = StyleSheet.create({
    container : {
        flex: 1,
        padding: 20,
        position: 'relative'
    },
    back : {
        height: 48,
        width: 48,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 14,
        backgroundColor: 'lightgrey',
        marginRight: 20
    },
    header : {
        flexDirection: 'row',
        alignItems : 'center'
    },
    card : {
        height: 96,
        width: 343,
        flexDirection: 'row',
        alignItems: 'center'
    },
    img : {
        height: 80,
        width: 80,
        borderRadius: 16,
        marginRight: 16
    }
})

export default LikedRecipe
