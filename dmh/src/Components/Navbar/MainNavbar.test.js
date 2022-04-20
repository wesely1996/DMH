import { shallow } from 'enzyme';
import MainNavbar from './MainNavbar';

describe('MainNavbar', ()=>{
  let navWrapper;
  beforeAll(() => {
    navWrapper = shallow(<MainNavbar/>);
  });

  it('has state', ()=>{
    const navState = navWrapper.state();
    expect(navState).toBeNull();
  });

  it('contains 1 Navbar', ()=>{
    expect(navWrapper.find('Navbar').length).toBe(1);
  });

  it('contains 1 Container', ()=>{
    expect(navWrapper.find('Container').length).toBe(1);
  });

  it('contains 1 image', ()=>{
    let logo = navWrapper.find('img');
    expect(logo.length).toBe(1);
  });

  it('contains 1 logo image', ()=>{
    let logo = navWrapper.find('img');
    expect(logo.prop('src')).toBe('logo192.png');
  });

  it('contains 3 NavDropdown', ()=>{
    expect(navWrapper.find('NavDropdown').length).toBe(3);
  });

  it('contains 2 buttons', ()=>{
    expect(navWrapper.find('Button').length).toBe(2);
  });

  it('contains 1 form', ()=>{
    expect(navWrapper.find('Form').length).toBe(1);
  });

  it('contains 1 form control', ()=>{
    expect(navWrapper.find('FormControl').length).toBe(1);
  });
  
});