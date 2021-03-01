import React, {useState} from 'react'
import { View, Text, StyleSheet, Image, TextInput, Modal, Pressable } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styled from 'styled-components'
import { Book, Video } from '../../assets'
import { colors } from '../../utils/colors'

const AddRecipe = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [bgModal, setBgModal] = useState(false)
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.txtHeader}>Add Your Recipe</Text>
                
                {/* input section */}
                <View style={styles.inputForm}>
                    <Image style={{marginRight: 10}} source={Book} />
                    <TextInput placeholder="Title" />
                </View>
                <View style={{...styles.inputForm, marginTop: 20, minHeight: 200, alignItems: 'flex-start'}}>
                    <TextInput multiline={true} placeholder="Ingredients" />
                </View>
                <TouchableOpacity style={{...styles.inputForm, marginTop: 20}} onPress={() => {
                    setModalVisible(true)
                    setBgModal(true)
                }}>
                    <Image style={{marginRight: 10}} source={Video} />
                    <Text style={{color: 'grey'}}>Add Video</Text>
                </TouchableOpacity>
                <View style={styles.containerbtn}>
                    <TouchableOpacity activeOpacity={0.6} style={styles.btn} > 
                        <Text style={{color: 'white'}}>POST</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {!bgModal ? (null) : (
                <View style={{flex: 1,marginTop: -2100, position: 'relative', backgroundColor: 'black', opacity: 0.5}} />
            ) }
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.bodyModal}>
                        <Pressable style={{height: '50%', justifyContent: 'center', alignItems: 'center'}}>
                            <Text>Photo Library</Text>
                        </Pressable>
                        <Pressable style={{height: '50%', justifyContent: 'center', alignItems: 'center'}}>
                            <Text>Take Photo</Text>
                        </Pressable>
                    </View>
                    <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => {
                        setModalVisible(!modalVisible)
                        setBgModal(!bgModal)
                    }}
                    >
                    <Text style={styles.textStyle}>Cancel</Text>
                    </Pressable>
                </View>
                </View>
            </Modal>
        </>
    )
}


const styles = StyleSheet.create({
    container : {
        flex: 1
    },
    txtHeader : {
        fontSize: 24,
        color: colors.main,
        alignSelf: 'center',
        marginTop: 40,
        marginBottom : 40
    },
    inputForm : {
        height: 60,
        width: 319,
        borderRadius: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        alignSelf: 'center'
    },
    containerbtn : {
        alignSelf: 'center',
        marginTop: 60,
        height: 50,
        width: 183,
    },
    btn : {
        height: '100%',
        width: '100%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.main
    },
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        marginBottom: 60,
        width: '100%',
        height: 180,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 35,
        alignItems: "center",
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonClose: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        width: 319,
        height: 40,
        borderRadius: 15,
        backgroundColor: "white",
      },
      textStyle: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      bodyModal : {
          height: 80,
          width: 319,
          borderRadius: 15,
          backgroundColor: 'white',
          justifyContent: 'center',
          marginBottom : 20
      }
})

export default AddRecipe
