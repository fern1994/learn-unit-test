import React from 'react'
import {shallow} from 'enzyme'
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage'
import toJson from 'enzyme-to-json'

test('Should render NotFoundPage correctly', () => {
  const wrapper = shallow(<ExpenseDashboardPage/>)
  expect(wrapper).toMatchSnapshot()
})