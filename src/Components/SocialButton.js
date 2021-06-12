import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../constants';

export default Button = ({buttonText, onPress, backgroundColor, color}) => {
    return(
        <TouchableOpacity onPress= {onPress} style={[styles.button, {backgroundColor: backgroundColor || colors.primary}]}>
            <Text style={[styles.text, {color: colors.primary }]}>{buttonText}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        width: 300,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
        borderRadius: 10,
        shadowColor: 'grey',
        shadowOpacity: 0.8,
        elevation: 6,
        shadowRadius: 15 ,
        shadowOffset : { width: 1, height: 13},
    },
    text:{
        fontSize: 16,
        fontWeight: 'bold'
    }
})