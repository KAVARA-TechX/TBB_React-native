import React, {useState} from 'react';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';

import { View, TouchableOpacity,StyleSheet, Dimensions} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Header,Text,Image,Card} from 'react-native-elements';
import HeaderLogo from '../Components/HeaderLogo';
// service
import SmallInvite from '../Components/SmallInvite'
import {Auth} from '../services'
import { colors } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';

export default Home = ({navigation}) => {
    const [ email, setEmail ] = useState()
    const {colors} =useTheme();
    const sheetRef = React.useRef(null);
    const fall = new Animated.Value(1);
    const tbbearnings='0.5 TBB/h'
    
        const onShare = async () => {
            try {
              const result = await Share.share({
                message:
                  'React Native | A framework for building native apps using React',
              });
              if (result.action === Share.sharedAction) {
                if (result.activityType) {
                  // shared with activity type of result.activityType
                } else {
                  // shared
                }
              } else if (result.action === Share.dismissedAction) {
                // dismissed
              }
            } catch (error) {
              alert(error.message);
            }
          };

      const renderHeader =()=>(
            <View style={styles.header}>
                <View style={styles.profileViews1}/>
                <View style={styles.pannelHeader}>
                <View style={{ backgroundColor:'#FEBF01',height:60, borderRadius:15,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <View style={{flexDirection:'column',justifyContent:'center',padding:15}}>
                    <Text style={{ color:'white',fontSize:18,flexDirection:'row'}}>Hello!</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
                    <View style={{flexDirection:'column',justifyContent:'center'}}>
                    <Text style={{color:'white',fontSize:16,flexDirection:'row',paddingEnd:15}}>Visit Profile</Text>
                    </View>
                </TouchableOpacity>    
                </View>
                <View style={styles.pannelHandle}>
                <View style={{flexDirection:'row',marginTop:10,backgroundColor:'#FEBF01',height:80, borderRadius:15,justifyContent:'space-between'}}>
                    <View style={{flexDirection:'column',justifyContent:'center'}}>
                    <Text style={{paddingStart:10,textAlign:'left', color:'white',fontSize:18 }}>Bright Rewards</Text>     
                    <Text style={{paddingStart:10,textAlign:'left', color:'white',fontSize:24}}>420.00 TBB</Text>
                    <Text style={{paddingStart:10,textAlign:'left',color:'white',fontSize:10}}>Estimated earnings so far</Text>
                    </View>
                    <View style={{flexDirection:'column',justifyContent:'center',marginEnd:10}}>
                    <Text style={{textAlign:'center',paddingTop:5, color:'white',fontSize:16}}>{tbbearnings}</Text>
                    <SmallInvite 
                        buttonText="Invite Your Friends"/>
                    </View>
                    </View>
                    <TouchableOpacity>
                    <Text style={{color:'grey',fontSize:25,marginTop:10}}>Bookmarks</Text>
                    </TouchableOpacity>
                    <View style={styles.profileViews}/>
                    <TouchableOpacity>
                    <Text style={{color:'grey',fontSize:25,marginTop:10}}>About</Text>
                    </TouchableOpacity>
                    <View style={styles.profileViews}/><TouchableOpacity>
                    <Text style={{color:'grey',fontSize:25,marginTop:10}}>TBB Rewards</Text>
                    </TouchableOpacity>
                    <View style={styles.profileViews}/>
                    <TouchableOpacity>
                    <Text style={{color:'grey',fontSize:25,marginTop:10}}>Rate the TBB app</Text>
                    </TouchableOpacity>
                    <View style={styles.profileViews}/>
                    <TouchableOpacity>
                    <Text style={{color:'grey',fontSize:25,marginTop:10}}>Terms and Conditions</Text>
                    </TouchableOpacity>
                    <View style={styles.profileViews}/>
                    <TouchableOpacity>
                    <Text style={{color:'grey',fontSize:25,marginTop:10}} onPress={()=>navigation.navigate('Privacy')}>Privacy Policy</Text>
                    </TouchableOpacity>
                    <View style={styles.profileViews}/>
                    </View>
                </View>
            </View>
      )
       


    return(
        <GestureHandlerRootView style={{flex:1}}>
            <BottomSheet
                ref={sheetRef}          
                snapPoints={[480,0]}
                renderHeader={renderHeader}
                initialSnap={1}
                callbackNode={fall} 
                borderRadius={20}
                enabledGestureInteraction={true} />
            <Header
            barStyle="light-content" // or directly
            rightComponent={<FontAwesome5 name={'bars'} style={{height:30,fontSize:30,color:'#FEBF01',marginBottom:10,marginLeft:10}} onPress={()=>sheetRef.current.snapTo(0)} />}
            leftComponent={<HeaderLogo/>}
            containerStyle={{
                backgroundColor: colors.white,
                height:'13%',
                justifyContent:'center'
            }}/>
         <View style={{
        width:'100%',
        height:'100%',bottom:0}}>
            <Image
            source={{ uri: 'https://robohash.org/randeep1'}}
            style={{ width: 360, height: 300 }}
            />
            <View>
                <Text h2 style={{paddingTop:'2%',paddingStart:5}}>News Heading</Text>
            <View>
                <Text h6 style={{paddingVertical:'3%',paddingStart:5}}>Date and time | Source:</Text>
            </View>
            <View>
                <Text style={{fontSize:20,paddingStart:5}}> Less is more at times. Sometimes short good quotes are powerful enough to inspire you for the day. These inspiring 4 word quotes are a mix of deep, meaningful, positive, happy and sassy ones about love, life, family, friendship and more.</Text>
            </View>
            </View>
            <View style={{justifyContent:'center',alignItems:'center',paddingVertical:'5%'}}>
                <Text h6 style={{color:'#FEBF01',bottom:0}}>Swipe up for next news</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{flexDirection:'column',height:50,width:50,justifyContent:'center'}}>
                <FontAwesome5 name={'star'} style={{marginStart:20,height:30,fontSize:25,color:'#FEBF01'}}/>
                </View>    
                <View style={{flexDirection:'column',height:50,width:50,justifyContent:'center'}}>
                <FontAwesome5 name={'share'} style={{marginStart:10,height:30,fontSize:25,color:'#FEBF01'}}/>    
                </View>    
                <View style={{flexDirection:'column',height:50,width:50,justifyContent:'center'}}>
                <FontAwesome5 name={'bookmark'} style={{marginStart:5,height:30,fontSize:25,color:'#FEBF01'}}/>
                </View>    
            </View> 
        </View>
            </GestureHandlerRootView>
    )
}
const styles = StyleSheet.create({
    header:{
     backgroundColor: 'rgb(240,240,240)',
     shadowColor:'#000000',
    
    elevation:50,
    shadowRadius: 55 ,
    shadowOffset : {width: 55, height: 33},
    shadowOpacity:0.8,
     padding:20,
     borderTopLeftRadius:40,
     borderTopRightRadius:40,
     justifyContent:'center',
        },
    panelHandle:{
      alignItems:'center',
    },
    panelHeader:{
        backgroundColor:colors.primary,
        borderBottomWidth:3,

    }, 
    profileViews:{
        borderBottomColor:colors.primary,
        borderBottomWidth:1,
        paddingBottom:5,
    }, profileViews1:{
        borderBottomColor:colors.primary,
        borderBottomWidth:5,
        marginBottom:5,
        marginLeft:140,
        marginRight:140,borderRadius:10
    },
   
})