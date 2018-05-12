import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'

const TabLink = ({ label, active, onPress }) => (
  <View>
    <TouchableOpacity style={{ paddingHorizontal: 10 }} onPress={onPress}>
      <Text>{label}</Text>
    </TouchableOpacity>
    {active && (
      <View
        style={{
          borderBottomWidth: 3,
          borderBottomColor: '#5B97C8',
        }}
      />
    )}
  </View>
)

export default TabLink
