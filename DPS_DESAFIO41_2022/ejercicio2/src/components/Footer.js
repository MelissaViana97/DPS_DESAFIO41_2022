import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

// onPress={calculate}

const Footer = ({ sumarTotal }) => {
    return(
        <View style = { styles.containerFooter }>
            <TouchableOpacity style = { styles.button } onPress={ sumarTotal }>
                <Text style = { styles.textButton } >Calcular</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    containerFooter: {
        position: 'absolute',
        bottom: 30,
        width: '100%',
        alignItems: 'center',
    },
    button:{
        width: '90%',
        backgroundColor: 'blue',
        padding: 15,
    },
    textButton:{
        fontSize: 19,
        color: '#ffff',
        textAlign: 'center',
    },
})

export default Footer;
