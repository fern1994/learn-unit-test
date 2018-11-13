import React from 'react'
import {shallow} from 'enzyme'
import expenses from '../fixtures/expenses'
import ExpenseListItem from '../../components/ExpenseListItem'
import toJson from 'enzyme-to-json'

test('Should render ExpenseListItem correctly', () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>)
  expect(toJson(wrapper)).toMatchSnapshot()
})