import React, {useState} from 'react';
import "./App.css";
// 3IvfH2FWSe4PZws1QOxsLtBRpdAlVeGWvuvH3CF2sHc

function App() {
  const [value, setValue] = useState("")
  const [results, setResults]=useState([])
  const [pageNo, setPageNo]=useState(1);
  const fetchImages = (flag)=>{
    if(flag){
      fetch(`https://api.unsplash.com/search/photos?client_id=3IvfH2FWSe4PZws1QOxsLtBRpdAlVeGWvuvH3CF2sHc&query=${value}&orientation=landscape&per_page=16&page=1`)
    .then(res=>res.json())
    .then(data => {
      setResults(data.results)
      setPageNo(2)
    });
    }
    else{
      fetch(`https://api.unsplash.com/search/photos?client_id=3IvfH2FWSe4PZws1QOxsLtBRpdAlVeGWvuvH3CF2sHc&query=${value}&orientation=landscape&per_page=16&page=${pageNo}`)
    .then(res=>res.json())
    .then(data => {
      let tempData=results
      // console.log(tempData.length)
      tempData=tempData.concat(data.results)
      // console.log(tempData.length)
      setResults(tempData)
      setPageNo(pageNo+1)
    });
    } 
    
  }
    return (
      <div className="App">
        <div className="mydiv">
          <input type="text" placeholder="Search for photos" value={value} onChange={(e)=>setValue(e.target.value)}/>
          <button className="search" onClick={()=>fetchImages(true)}>Search</button>
        </div>
        <div className="gallery">
          {
            results.map((item)=>{
              return <img className="item" key={item.id} src={item.urls.regular}/>
            })
          }
        </div>
        <button id="load" onClick={()=>fetchImages(false)}>Load more</button>
      </div>
    );
}
export default App;
