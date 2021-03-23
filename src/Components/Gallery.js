import React, { Component } from 'react';
import '../App.css'
import store from '../store'
import Item from './Item'
import {connect} from 'react-redux'
class Gallery extends Component {
    render() {
        let content = '';
        // console.log(store.getState());
        console.log(this.props.text)
        content = this.props.images.length>0?this.props.images.map((item)=>{
            return <Item key={item.id} src={item.urls.regular} />}):null;
            
        return (<div id="gallery">
                {content}
                {this.props.text}
            </div>)
        // return (
        //     <div id="gallery">
        //         {
        //             images.map((item)=>{
        //               return <Item key={item.id} src={item.urls.regular} />
        //             })
        //         }
        //     </div>
        // );
    }
}

const mapStateToProps=(state)=>({images:state.images, text: state.text});
export default connect(mapStateToProps)(Gallery);