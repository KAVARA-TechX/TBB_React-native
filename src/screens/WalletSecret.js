import React, {useState} from 'react';
import { ScrollView, StyleSheet, Text, View,Image } from 'react-native';
import { colors } from '../constants';
import { Button, TextButton, OtpInput, Input } from '../Components';
// service
import {Auth} from '../services'

export default WalletSecret = ({navigation}) => {

    const [ codeArr, setCodeArr ]= useState([])
    const [ number, setNumber ] = useState()
    const code = codeArr.join("")
    const [ confirm, setConfirm ] = useState(null) //if null means no otp message send
    
    


    return(
        <View style={styles.container}>
            <Text style={{fontSize:16,color:colors.primary,textAlign:'center'}}>Your Bright Rewards are safely </Text>
            <Text style={{fontSize:16,color:colors.primary,textAlign:'center'}}>stored on wallet</Text>
        <Image source={require('../Icons/wallet1.png')} style={{width:200,height:200}} />

        <Text style={styles.heading}>Setup Your wallet</Text>


            <OtpInput 
                onChangeText={ (e, index) => handleCode(e, index)}
                value= {codeArr}
                noOfInput = {6}
            />

            <Button
                buttonText= "Save"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center'
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