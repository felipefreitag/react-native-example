import React from 'react'
import { ScrollView } from 'react-native'

import Trip from './Trip'

const Future = ({ user }) => {
  const { futureTrips } = user

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{
        flexGrow: 1,
      }}>
      {futureTrips.map((trip, index) => (
        <Trip user={user} key={index} info={trip} />
      ))}
    </ScrollView>
  )
}
export default Future
