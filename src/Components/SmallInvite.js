import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../constants';

export default SmallInvite = ({buttonText, onPress}) => {
    return(
        <TouchableOpacity onPress= {onPress} style={styles.button}>
            <Text style={styles.text}>{buttonText}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:colors.white,
        width: 150,
        shadowOpacity:0.8,
        height: 28,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 8,
        borderRadius: 6,
        elevation: 6,
        shadowRadius: 15 ,
        shadowOffset : { width: 1, height: 13},
    },
    text:{
        color: colors.primary,
        fontSize: 12,
        fontWeight:'bold'
    }
})