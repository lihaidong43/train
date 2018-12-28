import React from 'react';
import { mount, shallow,configure} from 'enzyme';
import {expect} from 'chai';
import List from '../../src/todolist/list';
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });

describe('<List/>',() => {

  it('should render nothing when have not todos prop',() => {
    const wrapper = shallow(<List/>);
    expect(wrapper.find('ul').exists()).to.equal(false)
  })

  it('should render todo list when have todos prop', () => {
    const wrapper = shallow(<List todos ={[1,2,3]}/>);
    expect(wrapper.find('ul')).to.have.length(1);
    expect(wrapper.find('li')).to.have.length(3);
  })
})