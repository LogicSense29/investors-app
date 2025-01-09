import { View, Text, ScrollView, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, Entypo } from '@expo/vector-icons';


const tabs = ['Crypto', 'Stocks', 'ETFs', 'Options']

const Explore = () => {

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleIndexChange = (index) => {
    setSelectedIndex(index);
    // Handle the selected index change
  };

  const renderContent = () => {
    switch (selectedIndex) {
      case 0:
        return (
          <View style={{ marginTop: 30, }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>

              <View style={{ backgroundColor: '#fff', height: 150, width: 150, borderRadius: 100, alignItems: 'center', justifyContent: 'center', }}>
                <Text style={{ color: '#890709', fontWeight: 'bold', }}>91%</Text>
                <Text style={{ color: '#890709' }}>Crypto</Text>
              </View>

              <View >
                <View style={{ backgroundColor: 'gray', height: 90, width: 90, borderRadius: 100, marginLeft: -10, alignItems: 'center', justifyContent: 'center', }}>
                  <Text style={{ color: '#fff', fontWeight: 'bold', }}>9%</Text>
                  <Text style={{ color: '#fff' }}>Stocks</Text>
                </View>
                <View style={{ backgroundColor: 'gray', height: 75, width: 75, borderRadius: 100, marginLeft: -15, marginTop: 50, alignItems: 'center', justifyContent: 'center', }}>
                  <Text style={{ color: '#fff', fontWeight: 'bold', }}>0%</Text>
                  <Text style={{ color: '#fff' }}>Options</Text>
                </View>
              </View>

              <View style={{ backgroundColor: 'gray', height: 75, width: 75, borderRadius: 100, marginLeft: -30, marginTop: 30, alignItems: 'center', justifyContent: 'center', }}>
                <Text style={{ color: '#fff', fontWeight: 'bold', }}>0%</Text>
                <Text style={{ color: '#fff' }}>ETFs</Text>
              </View>

            </View>

            <View style={{ marginTop: 50, }}>
              <Text style={{ color: '#fff' }}>Cryptos are split across the different types of technology used to build them</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'gray', marginTop: 30, height: 20, borderRadius: 5,}}>
              <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center',  }}>
                <Text style={{ color: '#fff' }}>Other</Text>
                <AntDesign name='infocirlceo' color='#fff' size={14} />
              </View>
              <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center',  }}>
                <Text style={{ color: '#fff' }}>97%</Text>
                <AntDesign name='right' color='#fff' size={14} />
              </View>
            </View>

            <View>
              <TouchableOpacity style={{ backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', height: 40, marginTop: 24, borderRadius: 20, }}>
                <Text style={{ fontWeight: 'bold', }}>Earn Rewards</Text>
              </TouchableOpacity>
            </View>
          </View>
        )
      case 1:
        return (
          <View>

          </View>
        )
      case 2:
        return (
          <View>

          </View>
        )
      case 3:
        return (
          <View>

          </View>
        )
    }
  }


  return (
    <SafeAreaView style={{  backgroundColor: '#890709', }} >
      <View>
        <ScrollView showsVerticalScrollIndicator={false} style={{marginTop: 0, }}>
          <View style={{}}>
            <View style={{ backgroundColor: '#890709', }}>
              <View style={{ flexDirection: 'row', gap: 50 }}>
                {tabs.map((data, index) => (

                  <TouchableOpacity
                    style={{}} onPress={() => handleIndexChange(index)}>
                    <Text style={[styles.close, selectedIndex === index ? styles.active : styles.inactive]}>{data}</Text>
                  </TouchableOpacity>
                ))}
              </View>
              {/* Display the content returned by renderContent */}
            </View>
            {renderContent()}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Explore


const styles = StyleSheet.create({
  close: {
    textAlign: 'center',
    fontSize: 14
  },
  active: {
    backgroundColor: '#890709',
    color: 'white',
    lineHeight: 20,
    borderRadius: 100,
    fontSize: 18,
  },
  inactive: {
    color: 'gray',
    lineHeight: 20,
    borderRadius: 100,
  },
});