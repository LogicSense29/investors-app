import { View} from 'react-native'
import React from 'react'
import Login from '../../component/Login';

export default function LoginScreen() {
  return (
    <View style={{backgroundColor:"white", flex:1, justifyContent:"center"}}>
      <Login/>
    </View>
  )
}
