import { View, Text } from 'react-native'
import React from 'react'

export default function Details() {
  return (
    <View>
        <View>
      <Text>Country</Text>
      <TextInput placeholder='Nigeria'/>
      </View>
      <View>
      <Text>State</Text>
      <TextInput placeholder='Lagos'/>
      </View>
      <View>
      <Text>Street Address</Text>
      <TextInput placeholder='N0 24 Oloye Street'/>
      </View>
    </View>
  )
}