import React, {useState} from 'react';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';

import { View, TouchableOpacity,StyleSheet, ColorPropType} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Header,Text,Image,Card} from 'react-native-elements';
import HeaderLogo from '../Components/HeaderLogo';
// service
import {Auth} from '../services'
import { colors } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';


export default Home = ({navigation}) => {
    const [ email, setEmail ] = useState()
    const {colors} =useTheme();
    const sheetRef = React.useRef(null);
    const fall = new Animated.Value(1);
    const renderInner = () =>(
        <Text>Hello</Text>
        )
    
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
                <HeaderLogo/>
                <View style={styles.pannelHeader}>
                <View style={{ backgroundColor:'#FEBF01',height:50, borderRadius:15,justifyContent:'center'}}>
                    <Text style={{paddingTop:30,textAlign:'left', color:'white',fontSize:18,flexDirection:'column' }}>Hello,Name</Text>
                    <TouchableOpacity onPress={() => Auth.signOut()}>
                    <Text style={{textAlign:'right', paddingRight:20, textDecorationLine:'underline',flexDirection:'column', paddingBottom:30}}>LogOut</Text>
                    </TouchableOpacity>
                </View>
                    <View style={styles.pannelHandle}>
                <View style={{marginTop:10}}>
                <View style={{ backgroundColor:'#FEBF01',height:80, borderRadius:15,justifyContent:'center'}}>
                    <Text style={{padding:15,textAlign:'left', color:'white',fontSize:18,flexDirection:'column' }}>TBB Rewards</Text>
                    
                </View>
                        </View>
                    </View>
                </View>
            </View>
      )
       


    return(
        <SafeAreaView>
        <GestureHandlerRootView>
            <BottomSheet
                ref={sheetRef}
                snapPoints={[350, 0]}
                renderContent={renderInner}
                renderHeader={renderHeader}
                initialSnap={1}
                callbackNode={fall} 
                borderRadius={10}
                enabledGestureInteraction={true} />
            <Header
            barStyle="light-content" // or directly
            rightComponent={<FontAwesome5 name={'bars'} style={{height:25,fontSize:25,color:'#FEBF01'}} onPress={()=>sheetRef.current.snapTo(0)} />}
            centerComponent={<HeaderLogo/>}
            containerStyle={{
                backgroundColor: colors.white,
            }}/> 
            <Image
            source={{ uri: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.mos.cms.futurecdn.net%2FnGUneraFwt2iCnuu2iSWFf.jpg&imgrefurl=https%3A%2F%2Fwww.space.com%2F16080-solar-system-planets.html&tbnid=znHl3JehvP0B8M&vet=12ahUKEwi66Oeq5o3xAhXOTX0KHRETCOcQMygFegUIARDdAQ..i&docid=5h9fQE1S1JYhmM&w=969&h=768&q=space%3B&client=opera&ved=2ahUKEwi66Oeq5o3xAhXOTX0KHRETCOcQMygFegUIARDdAQ' }}
            style={{ width: 360, height: 300 }}
            />
            <View>
            <Text h2>News Heading</Text>
            <View>
                <Text h6>Date and time | Source:</Text>
            </View>
            <View>
                <Text style={{fontSize:18}}> Less is more at times. Sometimes short good quotes are powerful enough to inspire you for the day. These inspiring 4 word quotes are a mix of deep, meaningful, positive, happy and sassy ones about love, life, family, friendship and more.
                </Text>
            </View>
            </View>
            <View style={{justifyContent:'center'}}>
                <View style={{alignItems:'center'}}>
                    <Text h6 style={{color:'#FEBF01'}}>Swipe up for next news</Text>
                </View>
                    </View> 
            
            
           
            <View style={{justifyContent:'space-evenly'}}>
            <View
                style={{
                    
                    flexDirection:"column",
                    
                    borderTopLeftRadius:10,
                    borderTopRightRadius:10,
                    backgroundColor:"#F6f6f6",
                    shadowColor:'#grey',
                    shadowRadius:3,
                    shadowColor:'black',
                    shadowOffset:{width: -1, height: 3},
                    shadowOpacity:0.4,
                }}>
            </View>
            <FontAwesome5 name={'star'} style={{height:100,fontSize:20,paddingStart:20}}/>
            <FontAwesome5 name={'rocket'} style={{height:100,fontSize:20,paddingStart:20,alignSelf:'center'}}/>

            </View>
            </GestureHandlerRootView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    header:{
     backgroundColor: colors.white,
     shadowColor:'#333333',
     shadowOffset:{width: -1, height: -3},
     shadowRadius:2,
     shadowOpacity:0.4,
     padding:20,
     borderTopLeftRadius:20,
     borderTopRightRadius:20,
     justifyContent:'center',
        },
    panelHandle:{
      alignItems:'center',
    },
    panelHeader:{
        width:40,
        height:8,
        borderRadius:4,
        backgroundColor:colors.primary,
        marginBottom:10,
    }, 
    container:{
        flex:1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
})