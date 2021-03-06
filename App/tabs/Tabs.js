import React, { Component } from 'react'
import { View } from 'react-native'

import Navigation from './Navigation'
import Future from './Future'
import Joined from './Joined'
import Past from './Past'

export default class Tabs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 'future',
    }
    this.handleNavigate = this.handleNavigate.bind(this)
  }

  handleNavigate(tab) {
    this.setState({
      active: tab,
    })
  }

  render() {
    const { active } = this.state
    const { user } = this.props

    return (
      <View style={{ flex: 6 }}>
        <Navigation active={active} handleNavigate={this.handleNavigate} />
        {active === 'future' && <Future user={user} />}
        {active === 'joined' && <Joined user={user} />}
        {active === 'past' && <Past user={user} />}
      </View>
    )
  }
}
