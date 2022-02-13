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

  it('has showPage show the right components', ()=>{
    
    const appState = appWrapper.state();
    let PageLayout;
    switch(appState.page){
      case "create_items":
        PageLayout = appWrapper.find(CreateItems);
        break;
      default :
        PageLayout = appWrapper.find(Home);
    }

    expect(PageLayout).toHaveLength(1);
  });

  it('has page set to create_items and renders CreateItems', ()=>{
    
    appWrapper.setState({page : "create_items"});
    const createForm = appWrapper.find(CreateItems);

    expect(createForm).toHaveLength(1);
  });

  it('has page set to home and renders Home', ()=>{
    
    appWrapper.setState({page : "home"});
    const createForm = appWrapper.find(Home);

    expect(createForm).toHaveLength(1);
  });
});
