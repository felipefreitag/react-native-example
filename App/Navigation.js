import React from 'react'
import { View } from 'react-native'

import TabLink from './TabLink'

const Navigation = ({ active, handleNavigate }) => {
  const futureActive = active === 'future'
  const joinedActive = active === 'joined'
  const pastActive = active === 'past'

  return (
    <View
      style={{
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingHorizontal: 50,
        backgroundColor: 'lightgray',
      }}>
      <TabLink
        label="FUTURE"
        active={futureActive}
        onPress={() => handleNavigate('future')}
      />
      <TabLink
        label="JOINED"
        active={joinedActive}
        onPress={() => handleNavigate('joined')}
      />
      <TabLink
        label="PAST"
        active={pastActive}
        onPress={() => handleNavigate('past')}
      />
    </View>
  )
}

export default Navigation
