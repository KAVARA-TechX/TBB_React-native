import React from 'react'
import { Image } from 'react-native'

export default HeaderLogo = () => {
   return(
   <Image source = {require('./logo_yellow.png')} 
          style={{width:55, height:28, justifyContent:'center',alignSelf:'center'}} />
   )
         }
