import React, { Component } from 'react'
import { View } from 'react-native'

import { user } from './userData'

import Header from './header/Header'
import Tabs from './tabs/Tabs'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: user,
    }
  }

  render() {
    const { currentUser } = this.state

    return (
      <View style={{ flex: 1 }}>
        <Header user={currentUser} />
        <Tabs user={currentUser} />
      </View>
    )
  }
}
