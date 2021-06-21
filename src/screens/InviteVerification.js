import React, {useState} from 'react';
import { ScrollView, StyleSheet, TextInput,ImageBackground } from 'react-native';
import { colors } from '../constants';
// import { Alert } from 'react-native';

import { Button,  TextButton, SocialButton,Logo } from '../Components';
// service
import {Auth} from '../services'
import { ScreenHeight, ScreenWidth } from 'react-native-elements/dist/helpers';

export default InviteVerification = ({navigation}) => {

    const [ code, setCode ] = useState()

    return(
        <ImageBackground source={require('../Components/background.png')} style={styles.imgBackground} >
            <TextInput 
                placeholder= "Enter Refferal Code"
                placeholderTextColor={colors.white}
                value={code}
                onChangeText={e => setCode(e)}
                style={styles.textInput}
            />
            <Button  
                buttonText= "Let's SignUp"
                onPress={() => navigation.navigate('Login')}
            />
        </ImageBackground>

    )
}

const styles = StyleSheet.create({
  
 imgBackground:{
        width:ScreenWidth,
        height:ScreenHeight,
        flex:1,alignItems: 'center',
        justifyContent: 'center', fontSize: 24,
        fontWeight: 'bold',
        paddingVertical: 10,
    },
    textInput:{
        borderColor:'white',
        width: 300,
        height: 45,
        borderColor: colors.white,
        borderWidth: 1.5,
        marginVertical: 20,
        color: colors.white,
        fontSize: 16,
        borderRadius: 12,
        paddingHorizontal: 10
    }
})