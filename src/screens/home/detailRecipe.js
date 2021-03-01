import React, {useState, useRef} from 'react'
import { View, Text,Image, StyleSheet, ScrollView, Animated, Dimensions, FlatList, TextInput  } from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'
import {colors} from '../../utils/colors'
import { BtmLine, CommentImg, IconBack2, Image1, Image2, Play } from '../../assets'
import { BANNER_H } from './constants'
import CardVideo from '../../components/card/cardVideo'
import CardComment from '../../components/card/cardComment'

const DetailRecipe = ({navigarion}) => {
    const [btmLine1, setBtmLine1] = useState(true)
    const [btmLine2, setBtmLine2] = useState(false)

    const scrollA = useRef(new Animated.Value(0)).current;
    const windowHeight = Dimensions.get('window').height;

    return (
        <View>
            <Animated.ScrollView
               onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {y: scrollA}}}],
                {useNativeDriver: true},
              )}
              scrollEventThrottle={16}
            >
                <View style={styles.bannerContainer}>
                    <Animated.Image style={styles.img(scrollA)} source={Image2} />
                </View>
                <View style={{...styles.body, minHeight: windowHeight-20}}>
                    <View style={styles.headerBody}>
                        <TouchableOpacity style={styles.btnHeader} onPress={() => {
                            setBtmLine1(true)
                            setBtmLine2(false)
                        }}>
                            <Text style={{fontWeight: 'bold'}}>Ingredients</Text>
                            {!btmLine2 ? (
                                 <Image source={BtmLine} />
                            ) : (null)}
                        </TouchableOpacity>
                        <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}} onPress={() => {
                            setBtmLine2(true)
                            setBtmLine1(false)
                        }}>
                            <Text style={{fontWeight: 'bold'}}>Video Step</Text>
                            {!btmLine1 ? (
                                 <Image source={BtmLine} />
                            ) : (null)}
                        </TouchableOpacity>                        
                    </View>
                    {btmLine1 ? (
                        <View style={styles.bodySection}>
                            <Text>
                                - 2 slices whole-grain bread (bakery-fresh recommended){"\n"}
                                - 1 tablespoon hummus {"\n"}
                                - 2 slices tomato{"\n"}
                                - 1/2 small cucumber, thinly sliced lengthwise{"\n"}
                                - 1 slice low-fat cheese{"\n"}
                            </Text>
                        </View>
                    ) : (
                    <ScrollView style={{paddingHorizontal: 35, marginBottom: 20}}>
                        <CardVideo title="Video 1" />
                        <CardVideo title="Video 2" />
                        <CardVideo title="Video 3" />
                        <CardVideo title="Video 4" />
                        <CardVideo title="Video 2" />
                        <CardVideo title="Video 3" />
                        <View style={{height: 200, width: 319, backgroundColor: '#FAF7ED', alignSelf:'center', padding: 20}} >
                            <TextInput placeholder="Comment : " />
                        </View>
                        <View style={{width: 319, height: 50, alignSelf: 'center', marginTop: 20, marginBottom: 20}}>
                            <TouchableOpacity style={{height: '100%', width: '100%', borderRadius: 10, backgroundColor: colors.main, justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{color: 'white', fontWeight: 'bold'}}>Post Comment</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text>Comment : </Text>
                            <CardComment img={CommentImg} name="Fachri" comment="Nice recipe. simple and delicious, thankyou"/>
                            <CardComment img={CommentImg} name="Fachri" comment="Nice recipe. simple and delicious, thankyou"/>
                            <CardComment img={CommentImg} name="Fachri" comment="Nice recipe. simple and delicious, thankyou"/>
                        </View>
                    </ScrollView>
                    )}
                </View>
            </Animated.ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    bannerContainer: {
        marginTop: -1000,
        paddingTop: 1000,
        alignItems: 'center',
        overflow: 'hidden',
    },
    img : scrollA =>  ({
        width: '200%', 
        height: 462,
        transform: [
            {
              translateY: scrollA.interpolate({
                inputRange: [-462, 0, 462, 462 + 1],
                outputRange: [-462 / 2, 0, 462 * 0.75, 462 * 0.75],
              }),
            },
            {
              scale: scrollA.interpolate({
                inputRange: [-462, 0, 462, 462 + 1],
                outputRange: [2, 1, 0.5, 0.5],
              }),
            },
          ],
    }),
    body: {
        width: '100%',
        backgroundColor: 'white',
        marginTop : -20,
        borderTopLeftRadius : 20,
        borderTopRightRadius : 20
    },
    headerBody : {
        padding: 30 ,
        flexDirection: 'row', 
        width: 230, 
        justifyContent: 'space-between',
    },
    btnHeader: {
        justifyContent: 'center', 
        alignItems: 'center'
    },
    bodySection: {
        minHeight : 166,
        width: 319,
        borderRadius: 15,
        padding: 20,
        backgroundColor: '#FAF7ED',
        alignSelf: 'center'
    }

})

export default DetailRecipe