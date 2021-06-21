import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, UserProfile } from "../screens";
import Privacy from '../AppPages/Privacy';

const Stack = createStackNavigator();

export default AppNavigator = () => (
    <Stack.Navigator
        screenOptions = {{
            headerShown: null
        }}
    >     
        <Stack.Screen 
            name="Home" 
            component= {Home}
        />               
        <Stack.Screen
            name="UserProfile"
            component={UserProfile}
        /> 
        <Stack.Screen
            name="Privacy"
            component={Privacy}
        />   
        
    </Stack.Navigator> 
)