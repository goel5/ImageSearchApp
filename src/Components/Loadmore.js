import React, { Component } from 'react';
import '../App.css'
import { connect } from 'react-redux'
import {loadMoreImages} from '../services/actions/actions'
class Loadmore extends Component {
    onClick = e => {
        this.props.loadImageHandler(this.props.text, this.props.page);
    };
    render() {
        return (
            <div>
                <button id='load' onClick={this.onClick}>load more </button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    text: state.imgItems.text,
    page: state.imgItems.pageno
})
const mapDispatchToProps = dispatch => ({
    loadImageHandler: (val, page) => dispatch(loadMoreImages(val, page))
})
export default connect(mapStateToProps, mapDispatchToProps)(Loadmore)



