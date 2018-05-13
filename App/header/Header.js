import React from 'react'
import { View, StatusBar } from 'react-native'

import BackgroundImage from '../BackgroundImage'
import UserInfo from './UserInfo'

const Header = props => {
  return (
    <View style={{ flex: 4, backgroundColor: 'white' }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="rgba(0, 0, 0, 0.0)"
        translucent
      />
      <View style={{ flex: 1, alignItems: 'center' }}>
        <BackgroundImage
          source={require('../../assets/header.jpeg')}
          style={{ top: -20 }}
        />
      </View>
      <UserInfo {...props} />
    </View>
  )
}

export default Header
