import React, {useState} from 'react';
import { ScrollView, StyleSheet, Text,Image,ImageBackground } from 'react-native';
import { colors } from '../constants';
import { Alert } from 'react-native';
import { ScreenHeight, ScreenWidth } from 'react-native-elements/dist/helpers';

import { Button, Input, TextButton, SocialButton,Logo } from '../Components';
// service
import {Auth} from '../services'
export default Login = ({navigation}) => {

    return(
        <ImageBackground source={require('../Components/background.png')} style={styles.imgBackground} >

            <Text style={{color:'white',fontSize:40}}>Welcome to </Text>
            <Text style={{color:'white',fontSize:50,paddingBottom:25}}>Bright Media</Text>
            <Text style={{color:'white',fontSize:20,paddingTop:50}}>Sign in to get started</Text>         

            <Button 
                buttonText="Sign in with Email"
                onPress={() => navigation.navigate('EmailLogin')}
            />

          
            <SocialButton  
                buttonText= "Sign In With Google"
                backgroundColor= {colors.white}
                onPress={() => Auth.googleLogin()}
            />
            
            <Button 
                buttonText="SignUp with Phone No"
                onPress={() => navigation.navigate('OtpSignUp')}
            />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imgBackground:{
        width:ScreenWidth,
        height:ScreenHeight,
        flex:1,alignItems: 'center',
        justifyContent: 'flex-end', fontSize: 24,
        fontWeight: 'bold',
        paddingVertical: 10,
    },
    
    
    heading:{
        fontSize: 24,
        fontWeight: 'bold',

    }
})