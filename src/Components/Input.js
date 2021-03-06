import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { colors } from '../constants'

export default Input = ({placeholder, value, onChangeText, secureTextEntry}) => {
    return(
        <TextInput
            placeholder={placeholder}
            placeholderTextColor={colors.white}
            style={styles.inputContainer}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
        />
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        width: 300,
        height: 45,
        borderColor: colors.white,
        borderWidth: 1.5,
        marginVertical: 20,
        color: colors.white,
        fontSize: 14,
        borderRadius: 10,
        paddingHorizontal: 10
    }
})