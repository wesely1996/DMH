import { shallow } from 'enzyme';
import App from './App';
import CreateItems from '../../Components/CreateItems/CreateItems';
import Home from '../../Components/Home/Home';

describe('App', ()=>{
  let appWrapper;
  beforeAll(() => {
    appWrapper = shallow(<App/>);
  });

  it('has state', ()=>{
    
    const appState = appWrapper.state();

    expect(appState).not.toBeNull();
  });

  it('has page property defined', ()=>{
    
    const appState = appWrapper.state();

    expect(appState.page).toBeDefined();
  });
});
