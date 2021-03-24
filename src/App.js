import { Component } from 'react';
import Search from './components/Search'
import Gallery from './components/Gallery'
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

