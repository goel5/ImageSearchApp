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
        // console.log('images: ', this.props.images)
    };

    render() {
        return (
            <div>
                <div className='mydiv'>
                    <input type="text" placeholder="Search for photos" onChange={this.onChange} value={this.props.token}/>
                    <button className='search' onClick={this.onClick}>Search</button>
                </div>
                <div id="token">
                    <h3>{this.props.text.replace(/(^)[a-z]/g, char=>char.toUpperCase())}</h3>
                    <p></p>
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