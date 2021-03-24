import { Component } from 'react';
import Search from './Components/Search'
import Gallery from './Components/Gallery'
import './App.css'
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Search />
        <Gallery/>
      </div>
    );
  }
}


export default App;

