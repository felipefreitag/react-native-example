import React from 'react'
import renderer from 'react-test-renderer'
import Past from '../Past'

it('renders correctly', () => {
  const tree = renderer.create(<Past />).toJSON()
  expect(tree).toMatchSnapshot()
})
