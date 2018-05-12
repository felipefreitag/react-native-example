import React from 'react'
import { View, Image, Text } from 'react-native'

import BackgroundImage from './BackgroundImage'

const Trip = () => (
  <View style={{ height: '25%' }}>
    <BackgroundImage source={require('../assets/trip.jpeg')} />
    <View style={{ flexDirection: 'row', padding: 10 }}>
      <Image
        source={require('../assets/avatar50.jpeg')}
        style={{ marginRight: 10, borderRadius: 50 }}
      />
      <View style={{ width: '75%' }}>
        <Text style={{ color: 'white' }}>Trip Title</Text>
        <Text style={{ color: 'white' }}>Location, Country</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ color: 'red' }}>15</Text>
        <Text style={{ color: 'white' }}>July</Text>
      </View>
    </View>
  </View>
)

export default Trip
