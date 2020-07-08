import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-16';

Enzyme.configure({
    adapter: new EnzymeAdapter(),
    disableLifecycleMethods: true
})