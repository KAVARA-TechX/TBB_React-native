import React from 'react';
import { ViewBase,StyleSheet,ScrollView,Image,View,TouchableHighlight,TouchableOpacity } from 'react-native';
import {Header,Text,Card} from 'react-native-elements';
import { LogOut,InviteButton } from '../Components';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { colors } from '../constants';
import {Auth} from '../services'


import navigation from '../navigation';

export default UserProfile=({navigation})=>{
    return(
        <ScrollView>
        <View style={{flex:1, justifyContent:'center'}}>
            
                <Header
                    barStyle="light-content" // or directly
                    rightComponent={
                    <TouchableOpacity>
                    <Text style={{fontSize:20,color:'#FEBF01'}} onPress={()=>navigation.navigate('Home')}>Done</Text>
                    </TouchableOpacity>}
                    
                    leftComponent={<TouchableOpacity><FontAwesome5 name={'arrow-left'} style={{marginStart:5,height:30,fontSize:25,color:'#FEBF01'}}onPress={()=>navigation.navigate('Home')}/></TouchableOpacity>}
                    
                    containerStyle={{
                    backgroundColor: colors.white,
            }}/> 
                
                <View style={{flexDirection:'row',marginTop:100}}>
                    <View style={{flexDirection:'column'}}>
                        <Text style={{fontSize:16,paddingStart:25}}>Name</Text>  
                            <View style={styles.profileViews}/>
                        <Text style={{fontSize:16,paddingStart:25}}>UserName</Text>
                            <View style={styles.profileViews}/>
                        <Text style={{fontSize:16,paddingStart:25}}>Email</Text>
                            <View style={styles.profileViews}/>
                        <Text style={{fontSize:16,paddingStart:25}}>Phone Number</Text>
                            <View style={styles.profileViews}/>
                        <Text style={{fontSize:16,paddingStart:25}}>Date of Birth</Text>
                            <View style={styles.profileViews}/> 
                        <Text style={{fontSize:16,paddingStart:25}}>Account</Text>
                    </View>
                    <View style={{flexDirection:'column'}}>
                        <Text style={{fontSize:16,paddingStart:10}}>Rounak S Chindalia</Text>  
                            <View style={styles.profileViewsR}/>
                        <Text style={{fontSize:16,paddingStart:10}}>chindalia</Text>
                            <View style={styles.profileViewsR}/>
                        <Text style={{fontSize:16,paddingStart:10}}>rounakchindalia@gmail.com</Text>
                            <View style={styles.profileViewsR}/>
                        <Text style={{fontSize:16,paddingStart:10}}>+917230000448</Text>
                            <View style={styles.profileViewsR}/>
                        <Text style={{fontSize:16,paddingStart:10}}>07/07/1995</Text>
                            <View style={styles.profileViewsR}/> 
                        <Text style={{fontSize:16,paddingStart:10}}>Personal</Text>
                    </View>
                </View>
                <Text style={{fontSize:18,color:colors.primary,marginStart:25,marginTop:20}}>Your invite link</Text>
            <InviteButton 
                buttonText="https://mytbb.in/chindalia"
                onPress={() => navigation.navigate('Home')}
            />
            <Text style={{fontSize:18,color:colors.primary,marginStart:25}}>Your Network</Text>
            <LogOut
                buttonText="Logout"
                onPress= {()=>Auth.signOut()}
            />
        </View>
        </ScrollView>
    )
}

const styles=StyleSheet.create({
    profileViews:{
        borderBottomColor:colors.primary,
        borderBottomWidth:1,
        marginBottom:10,
        marginLeft:20,
    },
    profileViewsR:{
        borderBottomColor:colors.primary,
        marginBottom:10,
        borderBottomWidth:1,
    },

})