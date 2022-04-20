import { shallow } from 'enzyme';
import App from './App';

describe('App', ()=>{
  let appWrapper;
  beforeAll(() => {
    appWrapper = shallow(<App/>);
  });

  it('has state', ()=>{
    const appState = appWrapper.state();
    expect(appState).not.toBeNull();
  });

  it('has a navbar', ()=>{
    expect(appWrapper.find('MainNavbar').length).toBe(1);
  });
  
});
