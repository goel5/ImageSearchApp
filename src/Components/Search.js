import React, { Component } from 'react';
import '../App.css'
import {connect} from 'react-redux'
import {
    searchImage,
    fetchImages,
    setLoading
  } from '../actions/searchActions';
export class Search extends Component {
    onChange = e => {
        this.props.searchImage(e.target.value);
      };
    
    onClick = e => {
        e.preventDefault();
        this.props.fetchImages(this.props.text);
        this.props.setLoading();
      };
    // loadmore(){
    //     fetch(`https://api.unsplash.com/search/photos?client_id=3IvfH2FWSe4PZws1QOxsLtBRpdAlVeGWvuvH3CF2sHc&query=${this.state.text}&orientation=landscape&per_page=16&page=${this.state.pageno}`)
    //         .then(res => res.json())
    //         .then(res => this.setState({ images: this.state.images.concat(res.results), pageno:this.state.pageno+1 }))
    // }
    render() {
        return (
            <div>
                <div className='mydiv'>
                    <input type="text" placeholder="Search for photos" value={this.props.text} onChange={this.onChange} />
                    <button className='search' onClick={this.onClick}>Search</button>
                </div><p>sajal</p>
                
                {/* {
                    (this.state.images.length>0)?<button id="load" onClick={()=>this.loadmore()}>Loadmore</button>:<></>
                } */}
                
            </div>
        );
    }
}
const mapStateToProps=state=>({
    text: state.text
})
export default connect (
    mapStateToProps,
    {searchImage,
    fetchImages,
    setLoading}
)(Search)