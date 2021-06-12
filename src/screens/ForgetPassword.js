import React, {useState} from 'react';
import { View, StyleSheet, Dimensions,ImageBackground } from 'react-native';
import { colors } from '../constants';
import { Button, Input, TextButton } from '../Components';
// services
import {Auth} from '../services';
import { ScreenHeight, ScreenWidth } from 'react-native-elements/dist/helpers';
const {width, height} = Dimensions.get('window');

export default Login = ({navigation}) => {

    const [email, setEmail] = useState()

    return(
        <ImageBackground source={require('../Components/background.png')} style={styles.imgBackground} >

            <Input 
                placeholder= "Email"
                value= {email}
                onChangeText={ e => setEmail(e)}
            />
            
            <Button  
                buttonText= "Forget Password"
                onPress= {() => Auth.forgetPassword(email)}
            />

            <TextButton 
                text="Back to Login"
                onPress={() => navigation.navigate('Login')}
            />
        </ImageBackground>

    )
}

const styles = StyleSheet.create({
  
    imgBackground:{
        width:ScreenWidth,
        height:ScreenHeight,
        flex:1,
        alignItems: 'center',
        justifyContent: 'center', fontSize: 24,
        fontWeight: 'bold',
        paddingVertical: 10,
        justifyContent: 'center'
    },
})