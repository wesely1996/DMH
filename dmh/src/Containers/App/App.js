import { React, Component } from 'react';
import './App.css';
import MainNavbar from '../../Components/Navbar/MainNavbar';
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      
    }
  }

  render(){
    return(
      <div className='App'>
        <MainNavbar/>
      </div>
    );
  };
}

export default App;
