import React from 'react'
import { View, Image, Text } from 'react-native'

import BackgroundImage from '../BackgroundImage'

const Trip = ({ user, info }) => {
  const { avatar50 } = user
  const { title, location, country, day, month, image } = info

  return (
    <View style={{ height: '18%' }}>
      <BackgroundImage source={image} />
      <View style={{ flexDirection: 'row', padding: 13 }}>
        <Image
          source={avatar50}
          style={{ marginRight: 10, borderRadius: 50 }}
        />
        <View style={{ width: '75%' }}>
          <Text style={{ fontSize: 16, color: 'white' }}>{title}</Text>
          <Text style={{ fontSize: 16, color: 'white' }}>
            {location}, {country}
          </Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 16, color: 'red' }}>{day}</Text>
          <Text style={{ fontSize: 16, color: 'white' }}>{month}</Text>
        </View>
      </View>
    </View>
  )
}
export default Trip
