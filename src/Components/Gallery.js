import React, { Component } from 'react';
import '../App.css'
import Item from './Item'
import {connect} from 'react-redux'
export class Gallery extends Component {
    render() {
        const{images}=this.props;
        return (
            <div id="gallery">
                {
                    images.map((item)=>{
                      return <Item key={item.id} src={item.urls.regular} />
                    })
                }
            </div>
        );
    }
}

const mapStateToProps=state=>{
    return {
         imgArray:state.imgArray
    }
}
export default connect (
    mapStateToProps,
    
)(Gallery)