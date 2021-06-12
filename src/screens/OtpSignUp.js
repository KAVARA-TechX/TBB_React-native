import React, {useState} from 'react';
import { ScrollView, StyleSheet, Text, View,Image,ImageBackground } from 'react-native';
import { colors } from '../constants';
import { Button, TextButton, OtpInput, Input } from '../Components';
import { ScreenHeight, ScreenWidth } from 'react-native-elements/dist/helpers';

// service
import {Auth} from '../services'

export default OtpSignUp = ({navigation}) => {

    const [ codeArr, setCodeArr ]= useState([])
    const [ number, setNumber ] = useState()
    const code = codeArr.join("")
    const [ confirm, setConfirm ] = useState(null) //if null means no otp message send
    
    handleCode = (e, index) => {
        const codeArray = [...code]
        codeArray[index] = e
        setCodeArr(codeArray)
    }

    const _sendOtp = () => {
        Auth.sendOtp(number)
        .then(confirmation => setConfirm(confirmation))
    }

    return(
        <ImageBackground source={require('../Components/background.png')} style={styles.imgBackground} >
        <Image source={require('../Components/logo_yellow.png')} style={{width:200,height:200}} />

        <Text style={styles.heading}>Signup with OTP</Text>

            <Input
                placeholder= "Enter Number"
                value={number}
                onChangeText={e => setNumber(e)}
            />

            <Button
                buttonText= "Send OTP"
                onPress={() => _sendOtp(number)}
            />

            <OtpInput 
                onChangeText={ (e, index) => handleCode(e, index)}
                value= {codeArr}
                noOfInput = {6}
            />

            <Button
                buttonText= "Verify"
                onPress={() => Auth.confirmCode(confirm, code)}
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
        flex:1,alignItems: 'center',
        justifyContent: 'center', fontSize: 24,
        fontWeight: 'bold',
        paddingVertical: 10,
    },
    heading:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingVertical: 20,
    },
    code:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'   
    }
})