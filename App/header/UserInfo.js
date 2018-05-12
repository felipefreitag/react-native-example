import React from 'react'
import { View, Text, Image } from 'react-native'

import UserStats from './UserStats'
import Divider from './Divider'

const UserInfo = ({ user }) => {
  const { avatar100, name, trip, following, followers } = user

  return (
    <View style={{ flex: 3, alignItems: 'center' }}>
      <Image style={{ top: -50, borderRadius: 50 }} source={avatar100} />
      <Text style={{ top: -50, fontSize: 18, fontWeight: 'bold' }}>{name}</Text>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          paddingHorizontal: 50,
          top: -20,
        }}>
        <UserStats name="trip" value={trip} />
        <Divider />
        <UserStats name="following" value={following} />
        <Divider />
        <UserStats name="followers" value={followers} />
      </View>
    </View>
  )
}

export default UserInfo
