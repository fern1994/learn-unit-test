import React from 'react'
import { shallow } from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'
import toJson from 'enzyme-to-json'
import moment from 'moment'

test('Should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
})

test('Should render ExpenseForm correctly with expense date', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]} />)
  expect(toJson(wrapper)).toMatchSnapshot()
})


test('Should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(toJson(wrapper)).toMatchSnapshot()
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  })
  expect(wrapper.state('error').length).toBeGreaterThan(0)
  expect(toJson(wrapper)).toMatchSnapshot()
})

test('should set description on input change', () => {
  const value = 'New description'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('input').at(0).simulate('change', {
    target: {
      value
    }
  })
  expect(wrapper.state('description')).toBe(value)
})

test('should set note on textarea change', () => {
  const value = 'New note'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('textarea').at(0).simulate('change', {
    target: {
      value
    }
  })
  expect(wrapper.state('note')).toBe(value)
})

test('should set amount if valid input', () => {
  const value = '23.50'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('input').at(1).simulate('change', {
    target: {
      value
    }
  })
  expect(wrapper.state('amount')).toBe(value)
})

test('should set amount if invalid input', () => {
  const value = '12.122'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('input').at(1).simulate('change', {
    target: {
      value
    }
  })
  expect(wrapper.state('amount')).toBe('')
})

test('should call onSubmit prop for invalid form submission', () => {
  const onSubmitSpy = jest.fn()
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />)
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  })
  expect(wrapper.state('error')).toBe('')
  expect(onSubmitSpy).toHaveBeenCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    createdAt: expenses[0].createdAt,
    note: expenses[0].note
  })
})

// test('should set new date on date change', () => {
//   const now = moment()
//   const wrapper = shallow(<ExpenseForm/>)
//   console.log(wrapper.debug())
//   wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now)
//   expect(wrapper.state('createAt')).toEqual(now)
// })

test('should set calendar focus on change', () => {
  const focused = true
  const wrapper = shallow(<ExpenseForm/>)
  wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({focused})
  expect(wrapper.state('calendarFocused')).toEqual(focused)
})