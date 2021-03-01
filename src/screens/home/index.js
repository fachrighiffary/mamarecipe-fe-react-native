import React from 'react'
import {  View, Text, StyleSheet, Image, TextInput, ScrollView, NavigatorIOS } from 'react-native'
import { Chicken, IconSearch, Image1, Image2, Image3, Image4, Seafood, Soup } from '../../assets'
import {TouchableOpacity} from 'react-native-gesture-handler'

const Home = ({navigation}) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.formSearch}>
                <Image style={{height: 20, width: 20, marginRight: 10}} source={IconSearch} />
                <TextInput placeholder="Search Pasta, Bread, etc" />
            </View>
            {/* popular content */}
            <View style={styles.popular}>
                <Text style={{fontSize: 24, fontWeight: 'bold'}}>Popular Recipes</Text>
                <Text style={{fontSize: 16, color: 'grey'}}>Populer check</Text>
            </View>
            <View style={styles.containerPopular}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                    <TouchableOpacity activeOpacity={0.6} style={styles.cardPopular} onPress={() => {
                        navigation.navigate('DetailRecipe')
                    }}>
                        <Image style={styles.card} source={Image1} />
                        <View style={styles.txtImg}>
                            <Text style={{color: 'white', fontSize: 16,fontWeight:'bold'}}>Sandwich with Egg</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6} style={styles.cardPopular} onPress={() => {
                        navigation.navigate('DetailRecipe')
                    }}>
                        <Image style={styles.card} source={Image2} />
                        <View style={styles.txtImg}>
                            <Text style={{color: 'white', fontSize: 16,fontWeight:'bold'}}>Chicken Steak</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6} style={styles.cardPopular} onPress={() => {
                        navigation.navigate('DetailRecipe')
                    }}>
                        <Image style={styles.card} source={Image1} />
                        <View style={styles.txtImg}>
                            <Text style={{color: 'white', fontSize: 16,fontWeight:'bold'}}>Sandwich with Egg</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>


            {/* new content */}
            <View style={{paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{fontSize: 24, fontWeight: 'bold'}}>New Recipes</Text>
                <TouchableOpacity>
                    <Text style={{fontSize: 16, color: '#6D61F2'}}>More info</Text>
                </TouchableOpacity>
            </View>
            <View style={{marginTop:20, paddingHorizontal: 20, justifyContent: 'space-between', flexDirection: 'row'}}>
                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity style={{...styles.newCard, backgroundColor: '#57CE96'}}>
                        <Image source={Soup} />
                    </TouchableOpacity>
                    <Text style={{fontSize: 15 }}>Soup</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity style={{...styles.newCard, backgroundColor: '#FDE901'}}>
                        <Image source={Chicken} />
                    </TouchableOpacity>
                    <Text style={{fontSize: 15 }}>Chicken</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity style={{...styles.newCard, backgroundColor: 'black'}}>
                        <Image source={Seafood} />
                    </TouchableOpacity>
                    <Text style={{fontSize: 15 }}>Seafood</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity style={{...styles.newCard, backgroundColor: '#FDE901'}}>
                        <Image source={Chicken} />
                    </TouchableOpacity>
                    <Text style={{fontSize: 15 }}>Dessert</Text>
                </View>               
            </View>

            {/* popular for you */}
            <View style={styles.popular}>
                <Text style={{fontSize: 24, fontWeight: 'bold'}}>Popular For You</Text>
            </View>
            <View style={styles.containerPopular}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                    <TouchableOpacity style={styles.cardNew} onPress={() => {
                        navigation.navigate('DetailRecipe')
                    }}>
                        <Image style={styles.imgNew} source={Image3} />
                        <View style={styles.txtPopularCard}>
                            <Text style={{color: 'black', fontSize: 14,fontWeight:'bold'}}>Sandwich with Egg</Text>
                            <View style={{maxWidth: 130}}>
                                <Text style={{fontSize: 10}}>Beef steak with nopales, tartare ....</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cardNew} onPress={() => {
                        navigation.navigate('DetailRecipe')
                    }}>
                        <Image style={styles.imgNew} source={Image4} />
                        <View style={styles.txtPopularCard}>
                            <Text style={{color: 'black', fontSize: 14,fontWeight:'bold'}}>Sandwich with Egg</Text>
                            <View style={{maxWidth: 130}}>
                                <Text style={{fontSize: 10}}>Beef steak with nopales, tartare ....</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    
                </ScrollView>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: 'white'
    },
    formSearch : {
        height : 50,
        width: '90%',
        backgroundColor: '#EFEFEF',
        borderRadius: 15,
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginTop: 42
    },
    popular : {
        marginLeft: 20,
        marginTop: 30,
    },
    containerPopular : {
        marginTop: 13,
        marginBottom: 10
    },
    cardPopular : {
        height: 158,
        width: 260,
        backgroundColor:'grey',
        margin : 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    card : {
        height: 158,
        width: 260,
        borderRadius: 10,
        position: 'relative'
    },
    imgNew : {
        height: 140,
        width: 180,
        borderRadius: 10,
        position: 'relative'
    },
    txtImg: {
        position: 'absolute',
        maxWidth: 75, 
        maxHeight: 42,
        bottom: 20,
        left: 20
    },
    newCard : {
        height: 64,
        width: 64,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardNew : {
        height: 140,
        width: 180,
        backgroundColor:'grey',
        margin : 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    txtPopularCard : {
        position: 'absolute',
        width: '100%',
        height: '48%',
        backgroundColor: 'white',
        bottom: 0,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        paddingTop: 10,
        paddingHorizontal: 20,
    }
})

export default Home
