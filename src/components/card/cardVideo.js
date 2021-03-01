import React from 'react'
import { View, Text, Image } from 'react-native'
import { Play } from '../../assets'
import { colors } from '../../utils/colors'

const CardVideo = ({navigation, title}) => {
    return (
        <View style={{flexDirection: 'row', padding: 12, alignSelf: 'center', alignItems: 'center' ,height: 80, width: 319, backgroundColor: '#FAF7ED', borderRadius: 15, marginBottom: 20}}>
            <View style={{height: 56, width: 56, borderRadius: 16, backgroundColor: colors.main, justifyContent: 'center', alignItems: 'center', marginRight: 30 }}>
                <Image source={Play} />
            </View>
            <View>
                <Text style={{color: 'grey'}}>{title}</Text>
            </View>
        </View>
    )
}

export default CardVideo
