import React from 'react'
import { View, Text } from 'react-native'

const UserStats = ({ value, name }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{value}</Text>
    <Text style={{ color: 'lightgray' }}>{name}</Text>
  </View>
)

export default UserStats
