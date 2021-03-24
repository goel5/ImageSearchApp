import React, { Component } from 'react';
import '../App.css'
import { connect } from 'react-redux'
import Item from './Item'
import {loadMoreImages} from '../services/actions/actions'
class Loadmore extends Component {
    onClick = e => {
        this.props.loadImageHandler(this.props.text, this.props.page);
    };
    render() {
        return (
            <div>
                <button id='load' onClick={this.onClick}>load more </button>
                <Item/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    text: state.imgItems.text,
    page: state.imgItems.pageno
    // images: state.imgItems.imgArray
})
const mapDispatchToProps = dispatch => ({
    loadImageHandler: (val, page) => dispatch(loadMoreImages(val, page))
})
export default connect(mapStateToProps, mapDispatchToProps)(Loadmore)



