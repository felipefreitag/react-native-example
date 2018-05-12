import React from 'react'
import renderer from 'react-test-renderer'
import Joined from '../Joined'

it('renders correctly', () => {
  const tree = renderer.create(<Joined />).toJSON()
  expect(tree).toMatchSnapshot()
})
