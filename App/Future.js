import React from 'react'
import { ScrollView } from 'react-native'

import Trip from './Trip'

const Future = () => (
  <ScrollView
    style={{ flex: 1 }}
    contentContainerStyle={{
      flexGrow: 1,
    }}>
    <Trip />
    <Trip />
    <Trip />
    <Trip />
    <Trip />
    <Trip />
  </ScrollView>
)

export default Future
