import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GoogleSignin } from '@react-native-community/google-signin';
// import navigators
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';

// firebase auth
import auth from '@react-native-firebase/auth';

export default AppContainer = () => {
    // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

   // Handle user state changes
    function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '522435567787-6iu3vpue4j7am21ljbj79ukih2r30j1a.apps.googleusercontent.com',
    });
     
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

    return(
        <NavigationContainer style={{flex:6}}>
            { user ? <AppNavigator/> : <AuthNavigator/> }
        </NavigationContainer>
    )
}