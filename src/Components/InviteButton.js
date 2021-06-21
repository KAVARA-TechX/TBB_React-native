import React from 'react';
import { Text, View, StyleSheet,Image, TouchableOpacity } from 'react-native';
import { colors } from '../constants';

export default Button = ({buttonText, onPress}) => {
    return(
        <TouchableOpacity onPress= {onPress} style={styles.button}>
            <View style={{flexDirection:'row'}}>
            <Text style={styles.text}>{buttonText}</Text>
            <Image source={require('../Icons/Copy.png')} style={{marginStart:70}}/>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:colors.white,
        width: 320,
        shadowOpacity:0.8,
        height: 45,
        justifyContent: 'center',
        marginVertical: 20,
        borderRadius: 10,
        elevation: 6,
        shadowRadius: 15 ,
        marginStart:20,
        shadowOffset : { width: 1, height: 13},
    },
    text:{
        color: colors.primary,
        fontSize: 16,
        fontWeight:'bold',paddingStart:15
    }
})