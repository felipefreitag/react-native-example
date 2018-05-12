import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

const TabLink = ({ label, active, onPress }) => (
  <TouchableOpacity
    style={{
      height: 40,
      justifyContent: 'center',
      paddingHorizontal: 10,
      borderBottomWidth: active ? 3 : 0,
      borderBottomColor: '#5B97C8',
    }}
    onPress={onPress}>
    <Text>{label}</Text>
  </TouchableOpacity>
)

export default TabLink
