import React, { Component } from 'react';
import '../App.css'
import Item from './Item'
import {connect} from 'react-redux'
export class Gallery extends Component {
    render() {
        const{images}=this.props;
        let content = '';
        content = images.Response==='True'?images.map((item)=>{
            return <Item key={item.id} src={item.urls.regular} />}):null;
            return (<div id="gallery">
                {content}
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

const mapStateToProps=state=>{
    return {
         imgArray:state.imgArray
    }
}
export default connect (
    mapStateToProps
    
)(Gallery)