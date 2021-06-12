import React from 'react'
import { Image } from 'react-native'

export default Background = () => {
   return(
   <Image source = {require('./background.png')} 
          style={{width:200, height:200, justifyContent:'flex-start'}} />
   )
         }
