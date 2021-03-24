import React, { Component } from 'react';
import '../App.css'
import {connect} from 'react-redux'
import {searchImage, fetchedImages} from '../services/actions/actions'

class Search extends Component {
    constructor(){
        super()
        this.state={
            name:""
        }
    }
    handleSubmit(){
        console.log("Onclick called")
        this.props.fetchImageHandler(this.state.name);
        // console.log(this.props.text)
      };
    // loadmore(){
    //     fetch(`https://api.unsplash.com/search/photos?client_id=3IvfH2FWSe4PZws1QOxsLtBRpdAlVeGWvuvH3CF2sHc&query=${this.state.text}&orientation=landscape&per_page=16&page=${this.state.pageno}`)
    //         .then(res => res.json())
    //         .then(res => this.setState({ images: this.state.images.concat(res.results), pageno:this.state.pageno+1 }))
    // }
    
    render() {
        return (
            <div>
                {console.log('props: ',this.props.imgArray)}
                <div className='mydiv'>
                    <input type="text" placeholder="Search for photos" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
                    <button className='search' onClick={()=>this.handleSubmit()}>Search</button>
                </div>
                
                {/* {
                    (this.state.images.length>0)?<button id="load" onClick={()=>this.loadmore()}>Loadmore</button>:<></>
                } */}
                
            </div>
        );
    }
}
const mapStateToProps=state=>({
    // text: state,
    imgArray: state
})
const mapDispatchToProps=dispatch=>({
    // searchImageHandler: val=>dispatch(searchImage(val)),
    fetchImageHandler: val=>dispatch(fetchedImages(val))
})
export default connect(mapStateToProps, mapDispatchToProps)(Search)