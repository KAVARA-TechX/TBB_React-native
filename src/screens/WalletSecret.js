import React, {useState} from 'react';
import { ScrollView, StyleSheet, Text, View,Image,ImageBackground,Dimensions } from 'react-native';
import { colors } from '../constants';
import { ScreenHeight, ScreenWidth } from 'react-native-elements/dist/helpers';
import { Button, TextButton, OtpInput, Input } from '../Components';
// service
import {Auth} from '../services'

export default WalletSecret = ({navigation}) => {

 
    const [ password, setPassword ] = useState()

    return(
        <ImageBackground source={require('../Components/background.png')} style={styles.imgBackground} >
            <Text style={{fontSize:16,color:colors.primary,textAlign:'center'}}>Your Bright Rewards are safely </Text>
            <Text style={{fontSize:16,color:colors.primary,textAlign:'center'}}>stored on wallet</Text>
        <Image source={require('../Icons/wallet1.png')} style={{width:200,height:200}} />
        <Text style={styles.heading}>Setup Your wallet</Text>


            <Input
                placeholder= "Wallet Passcode"
                secureTextEntry= {true}
                value={password}
                onChangeText={e => setPassword(e)}
            />

            <Button
                buttonText= "Save"
                onPress={() =>navigation.navigate('Home')}
            />
        
        </ImageBackground>
    )
}

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center'
    },imgBackground:{
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