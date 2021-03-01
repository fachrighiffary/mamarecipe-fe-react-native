import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, Modal, Pressable, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { IconBack2 } from '../../assets'
import { colors } from '../../utils/colors'

const EditProfile = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalPassVisible, setModalPassVisible] = useState(false);
    const [bgModal, setBgModal] = useState(false)
    return (
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity activeOpacity={0.6} style={styles.back} onPress={() => {
                        navigation.goBack()
                    }}>
                        <Image source={IconBack2} />
                    </TouchableOpacity>
                    <Text style={{fontSize: 20, color: colors.main}}>Edit Profile</Text>
                </View>
                <TouchableOpacity activeOpacity={0.6} style={{marginTop: 40}} onPress={() => {
                    setModalVisible(true)
                    setBgModal(true)
                }} >
                    <Text>Change Profile Picture</Text>
                    <View style={{borderWidth: 1, width : '100%', borderColor: 'grey', marginTop : 10}} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6} style={{marginTop: 20}} onPress={() => {
                    setModalPassVisible(true)
                    setBgModal(true)
                }}>
                    <Text>Change Password</Text>
                    <View style={{borderWidth: 1, width : '100%', borderColor: 'grey', marginTop : 10}} />
                </TouchableOpacity>
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
            
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalPassVisible}
            >
                <View style={styles.centeredView}>
                <View style={{...styles.modalView,marginBottom: -20, height: 360, backgroundColor: 'white'}}>
                    <View>
                        <View style={{marginBottom: 20, height: 40, width: 319, backgroundColor: '#E7E7E7',paddingHorizontal: 20,  borderRadius: 15}}>
                            <TextInput placeholder="Old Password" />
                        </View>
                        <View style={{marginBottom: 20, height: 40, width: 319, backgroundColor: '#E7E7E7',paddingHorizontal: 20,  borderRadius: 15}}>
                            <TextInput placeholder="New Password" />
                        </View>
                        <View style={{marginBottom: 20, height: 40, width: 319, backgroundColor: '#E7E7E7',paddingHorizontal: 20, borderRadius: 15}}>
                            <TextInput placeholder="Retype New Password" />
                        </View>
                    </View>
                    <Pressable
                    style={{...styles.buttonClose, marginBottom: 20}}
                    onPress={() => {
                        setModalPassVisible(!modalPassVisible)
                        setBgModal(!bgModal)
                    }}
                    >
                    <Text style={styles.textStyle}>Save</Text>
                    </Pressable>
                    <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => {
                        setModalPassVisible(!modalPassVisible)
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
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        marginBottom: 20,
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
        backgroundColor: "#E7E7E7",
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
          backgroundColor: '#E7E7E7',
          justifyContent: 'center',
          marginBottom : 20
      }
})

export default EditProfile
