import { View, SafeAreaView } from 'react-native'
import React from 'react'
import SignUp from '../../component/SignUp'

export default function SignUpScreen() {
  return (
    <SafeAreaView style={{backgroundColor:"white", flex:1, justifyContent:"center"}}>
      <SignUp/>
    </SafeAreaView>
  )
}