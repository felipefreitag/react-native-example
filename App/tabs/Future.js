import React from 'react'
import { View, ScrollView } from 'react-native'

import Trip from './Trip'

const Future = ({ user }) => {
  const { futureTrips } = user

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        {futureTrips.map((trip, index) => (
          <Trip user={user} key={index} info={trip} />
        ))}
      </ScrollView>
    </View>
  )
}
export default Future
