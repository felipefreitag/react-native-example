import React from 'react'
import renderer from 'react-test-renderer'
import Tabs from '../Tabs'

const user = { futureTrips: [] }

it('renders correctly', () => {
  const tree = renderer.create(<Tabs user={user} />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('handles state correctly', () => {
  const instance = renderer.create(<Tabs user={user} />).getInstance()
  expect(instance.state.active).toBe('future')
  instance.handleNavigate('foo')
  expect(instance.state.active).toBe('foo')
})
