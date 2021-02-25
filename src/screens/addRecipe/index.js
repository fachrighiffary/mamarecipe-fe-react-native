import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import styled from 'styled-components'

const AddRecipe = () => {
    return (
        <View style={styles.container}>
            <Text>Ini adalah halaman add recipe</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container : {
        backgroundColor: 'green',
        flex: 1
    }
})

export default AddRecipe
