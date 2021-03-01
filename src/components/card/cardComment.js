import React from 'react'
import { View, Text, Image } from 'react-native'


const CardComment = ({img, name, comment}) => {
    return (
        <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center'}}>
            <Image source={img} style={{height: 32, width: 32, borderRadius: 16, marginRight: 20}} />
            <View>
                <Text>{name}</Text>
                <Text>{comment}</Text>
            </View>
        </View>
    )
}

export default CardComment
