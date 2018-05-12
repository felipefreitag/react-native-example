import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

const TabLink = ({ label, active, onPress }) => (
  <TouchableOpacity
    style={{
      height: 40,
      justifyContent: 'center',
      paddingHorizontal: 10,
      borderBottomWidth: 3,
      borderBottomColor: active ? '#5B97C8' : 'lightgray',
    }}
    onPress={onPress}>
    <Text style={{ fontWeight: 'bold' }}>{label}</Text>
  </TouchableOpacity>
)

export default TabLink
