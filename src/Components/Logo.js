import React from 'react'
import { Image } from 'react-native'

export default Logo = () => {
   return(
   <Image source = {require('./logo_yellow.png')} 
          style={{width:200, height:200, justifyContent:'flex-start',marginTop:100}} />
   )
         }
