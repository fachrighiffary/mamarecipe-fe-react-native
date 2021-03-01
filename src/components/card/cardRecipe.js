import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const CardRecipe = ({title, user, taste, imgCard}) => {
    return (
        <View style={styles.card}>
            <Image source={imgCard} style={styles.img} />
            <View>
                <Text style={{fontWeight: 'bold'}}>{title}</Text>
                <Text style={{color: 'grey'}}>{user}</Text>
                <Text style={{fontWeight: 'bold'}}>{taste}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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

export default CardRecipe
