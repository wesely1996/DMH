import './App.css';
import CreateItems from '../../Components/CreateItems/CreateItems';
import { Component } from 'react';
import Home from '../../Components/Home/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "home"
    };
  }

  showPage(){
    switch(this.state.page){
      case "create_items":
        return <CreateItems/>;
      default:
        return <Home/>;
    }
  }

  render(){
    return (
      <div className="App">
        {this.showPage()}
      </div>
    );
  }
}

export default App;
