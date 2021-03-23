import { Component } from 'react';
import Search from './Components/Search'
import {Provider} from 'react-redux'
import {store} from './redux/store'
import Gallery from './Components/Gallery'
import './App.css'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className='App'>
        <Search className='search'/>
        <Gallery/>
      </div>
      </Provider>
    );
  }
}


export default App;

