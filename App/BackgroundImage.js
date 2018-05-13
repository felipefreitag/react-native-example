import React from 'react'
import { View, Image } from 'react-native'

const BackgroundImage = ({ source, style }) => (
  <View style={[{ position: 'absolute' }, style]}>
    <Image style={{ flex: 1, resizeMode: 'cover' }} source={source} />
  </View>
)

export default BackgroundImage
