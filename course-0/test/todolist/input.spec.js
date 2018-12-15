import React from 'react';
import { mount, shallow,configure} from 'enzyme';
import {expect} from 'chai';
import Input from '../../src/todolist/input';
import Adapter from 'enzyme-adapter-react-16'
import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai);
configure({ adapter: new Adapter() });

describe('<Input/>', () => {
  it('should render',() => {
    const spy =  sinon.spy()
    const wrapper = shallow(<Input add={spy}/>);
    const input = wrapper.find('input')
    input.simulate('keyDown', {keyCode: 13,target : {value : 'word'}})
    expect(spy).to.be.called;
  })
})