import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, SignUp, ForgetPassword, OtpSignUp, EmailLogin,InviteVerification } from "../screens";

const Stack = createStackNavigator();

export default AuthNavigator = () => (
    <Stack.Navigator
        screenOptions = {{
            headerShown: null
        }}
        >   
        
        <Stack.Screen
            name="InviteVerification"
            component={InviteVerification}
        />
        <Stack.Screen 
            name="Login" 
            component= {Login}
        />          
        <Stack.Screen
            name="EmailLogin"
            component={EmailLogin}
        />
        <Stack.Screen 
            name="SignUp" 
            component= {SignUp}
        />          
        <Stack.Screen 
            name="ForgetPassword" 
            component= {ForgetPassword}
        />          
        <Stack.Screen
            name="OtpSignUp" 
            component= {OtpSignUp}
        />
        <Stack.Screen
            name="WalletSecret"
            component={WalletSecret}
            />
    </Stack.Navigator> 
)