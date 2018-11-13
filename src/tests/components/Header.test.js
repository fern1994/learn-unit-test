import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
// import ReactShallowRenderer from 'react-test-renderer/shallow'

import Header from '../../components/Header'

/**test react renderer */
// test('Should render Header correctly', () => {
//   const renderer = new ReactShallowRenderer()
//   renderer.render(<Header/>)
//   expect(renderer.getRenderOutput()).toMatchSnapshot()
// })

test('Should render Header correctly', () => {
  const wrapper = shallow(<Header/>)

  /** ทำ header Snapshot */
  expect(toJson(wrapper)).toMatchSnapshot()

  /**ต้องมี H1 ใน header จำนวน 1 อัน */
  expect(wrapper.find('h1').length).toBe(1)
  /** ต้องมี text ใน h1 ว่า Expensify*/
  expect(wrapper.find('h1').text()).toBe('Expensify')
})