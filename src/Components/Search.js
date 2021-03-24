import React, { Component } from 'react';
import '../App.css'
import { connect } from 'react-redux'
import { searchImage, fetchedImages } from '../services/actions/actions'

class Search extends Component {

    onChange = e => {
        this.props.searchImageHandler(e.target.value);
    };
    onClick = e => {
        e.preventDefault();
        // console.log('text: ', this.props.text)
        this.props.fetchImageHandler(this.props.token);
        
    };

    render() {
        //converting string to pascal convention
        // console.log('images: ', this.props.images.length)
        let sentence=this.props.text;
        sentence=(this.props.images.length!==0)?sentence.charAt(0).toUpperCase()+sentence.slice(1).toLowerCase():null

        return (
            <div>
                <div className='mydiv'>
                    <input type="text" placeholder="Search for photos" onChange={this.onChange} value={this.props.token}/>
                    <button className='search' onClick={this.onClick}>Search</button>
                </div>
                <div id="token">
                    <h3>{sentence}</h3>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    token: state.imgItems.token,
    images: state.imgItems.imgArray,
    text: state.imgItems.text
})
const mapDispatchToProps = dispatch => ({
    searchImageHandler: token=>dispatch(searchImage(token)),
    fetchImageHandler: val => dispatch(fetchedImages(val))
})
export default connect(mapStateToProps, mapDispatchToProps)(Search)