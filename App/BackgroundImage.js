import React from 'react'
import { View, Image } from 'react-native'

const BackgroundImage = ({ source }) => (
  <View
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    }}>
    <Image
      style={{
        flex: 1,
        resizeMode: 'cover',
      }}
      source={source}
    />
  </View>
)

export default BackgroundImage
