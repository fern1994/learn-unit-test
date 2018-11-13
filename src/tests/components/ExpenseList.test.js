import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseList } from '../../components/ExpenseList' //เข้าไปอ่านใน file นี้นิดนึง
import expenses from '../fixtures/expenses'
import toJson from 'enzyme-to-json'

test('Should render ExpenseList with expenses', () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />)
  expect(toJson(wrapper)).toMatchSnapshot()
})

test('Should render ExpenseList with empty message', () => {
  const wrapper = shallow(<ExpenseList expenses={[]}/>)
  expect(toJson(wrapper)).toMatchSnapshot()
})

