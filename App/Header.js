import React from 'react'
import { View, Text, Image, StatusBar } from 'react-native'

import BackgroundImage from './BackgroundImage'
import UserStats from './UserStats'
import Divider from './Divider'

const Header = () => (
  <View style={{ flex: 2 }}>
    <StatusBar
      barStyle="light-content"
      backgroundColor="rgba(0, 0, 0, 0.0)"
      translucent
    />
    <View style={{ flex: 2, alignItems: 'center' }}>
      <BackgroundImage source={require('../assets/header.jpeg')} />
    </View>
    <View style={{ flex: 3, alignItems: 'center' }}>
      <Image
        style={{ top: -50, borderRadius: 50 }}
        source={require('../assets/avatar100.jpeg')}
      />
      <Text style={{ top: -50, fontSize: 18, fontWeight: 'bold' }}>
        Jessica Harsh
      </Text>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          paddingHorizontal: 50,
          top: -20,
        }}>
        <UserStats name="trip" value="3" />
        <Divider />
        <UserStats name="following" value="3" />
        <Divider />
        <UserStats name="followers" value="250" />
      </View>
    </View>
  </View>
)

export default Header
