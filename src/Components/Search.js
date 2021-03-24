import React, { Component } from 'react';
import '../App.css'
import { connect } from 'react-redux'
import { searchImage, fetchedImages } from '../services/actions/actions'

class Search extends Component {
    onChange = e => {
        this.props.searchImageHandler(e.target.value);
    };
    onClick = e => {
        console.log('text: ', this.props.text)
        this.props.fetchImageHandler(this.props.text);
        console.log('images: ', this.props.images)
    };

    render() {
        return (
            <div>
                <div className='mydiv'>
                    <input type="text" placeholder="Search for photos" onChange={this.onChange} />
                    <button className='search' onClick={this.onClick}>Search</button>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    text: state.imgItems.text,
    images: state.imgItems.imgArray
})
const mapDispatchToProps = dispatch => ({
    searchImageHandler: val=>dispatch(searchImage(val)),
    fetchImageHandler: val => dispatch(fetchedImages(val))
})
export default connect(mapStateToProps, mapDispatchToProps)(Search)