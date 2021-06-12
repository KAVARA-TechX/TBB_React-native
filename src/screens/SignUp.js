import React, {useState} from 'react';
import { View, StyleSheet, Dimensions,Image,ImageBackground} from 'react-native';
import { Button, Input, TextButton } from '../Components';
// services
import {Auth} from '../services'
import { colors } from '../constants';
import { ScreenHeight, ScreenWidth } from 'react-native-elements/dist/helpers';


const {width, height} = Dimensions.get('window');

export default SignUp = ({navigation}) => {

    const [ userName, setUserName ]= useState()
    const [ email, setEmail ] = useState()
    const [ password, setPassword ] = useState()

    return(
        <ImageBackground source={require('../Components/background.png')} style={styles.imgBackground} >

        <Image source={require('../Components/logo_yellow.png')} style={{width:200,height:200}} />

            <Input 
                placeholder= "Full Name"
                value={userName}
                onChangeText={e => setUserName(e)}
            />
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

            <Button  
                buttonText= "Sign Up"
                onPress={ () => Auth.signUp(userName, email, password)}
            />

            <TextButton 
                text="Have an account? Login"
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
})