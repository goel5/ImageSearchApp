import React, {useState} from 'react';
import "./App.css";
// 3IvfH2FWSe4PZws1QOxsLtBRpdAlVeGWvuvH3CF2sHc

function App() {
  const [value, setValue] = useState("")
  const [results, setResults]=useState([])

  const fetchImages = (variables)=>{
    fetch(`https://api.unsplash.com/search/photos?client_id=3IvfH2FWSe4PZws1QOxsLtBRpdAlVeGWvuvH3CF2sHc&query=${value}&orientation=landscape&per_page=16`)
    .then(res=>res.json())
    .then(data => {
      setResults(data.results)
    })
  }
    return (
      <div className="App">
        <div className="mydiv">
          <input type="text" placeholder="Search for photos" value={value} onChange={(e)=>setValue(e.target.value)}/>
          <button className="search" onClick={()=>fetchImages()}>Search</button>
        </div>
        <div className="gallery">
          {
            results.map((item)=>{
              return <img className="item" key={item.id} src={item.urls.regular}/>
            })
          }
        </div>
        <button id="load">Load more</button>
      </div>
    );
}
export default App;