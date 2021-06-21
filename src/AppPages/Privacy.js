import React  from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { WebView } from 'react-native-webview';
import { View, TouchableOpacity,StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Header} from 'react-native-elements';
// service
import { colors } from '../constants';

const Privacy=({navigation})=>{
    return(
        <ScrollView>
            <Header
                    barStyle="light-content" // or directly        
                    leftComponent={<TouchableOpacity><FontAwesome5 name={'arrow-left'} style={{marginStart:5,height:30,fontSize:25,color:'#FEBF01'}}onPress={()=>navigation.navigate('Home')}/></TouchableOpacity>}
                    containerStyle={{
                    backgroundColor: colors.white,
            }}/> 
            <View style = {styles.container}>  
            <WebView  
                source = {{ uri:'https://mytbb.in/privacy' }}  
            />  
        </View> 
        </ScrollView>
    )
}
export default Privacy;

const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
    }  
})  