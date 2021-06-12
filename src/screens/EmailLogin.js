import React, {useState} from 'react';
import { ScrollView, StyleSheet, Text,Image,ImageBackground } from 'react-native';
import { colors } from '../constants';
import { Alert } from 'react-native';
import { ScreenHeight, ScreenWidth } from 'react-native-elements/dist/helpers';
import { Button, Input, TextButton, SocialButton,Logo } from '../Components';
// service
import {Auth} from '../services'

export default EmailLogin = ({navigation}) => {

    const [ email, setEmail ] = useState()
    const [ password, setPassword ] = useState()

    return(
        <ImageBackground source={require('../Components/background.png')} style={styles.imgBackground} >

            <Image source={require('../Components/logo_yellow.png')} style={{width:200,height:200, marginTop:25}} />
            <Input 
                placeholder= "Email"
                value={email}
                onChangeText={e => setEmail(e)}
            />
            <Input
                placeholder= "Password"
                secureTextEntry= {true}
                value={password}
                onChangeText={e => setPassword(e)}
            />

            <TextButton 
                text="Forget Password"
                onPress={() => navigation.navigate('ForgetPassword')}
            />

            <Button  
                buttonText= "Login"
                onPress={() => Auth.signIn(email, password)}
            />

            <TextButton 
                text="Have not an account? SignUp"
                onPress={() => navigation.navigate('SignUp')}
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
    heading:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingVertical: 10,
    }
})