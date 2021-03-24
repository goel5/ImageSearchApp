import React, { Component } from 'react';
import '../App.css'
import { connect } from 'react-redux'
import Item from './Item'
import Loadmore from './Loadmore'
class Gallery extends Component {
    render() {
        return (
            <div>{
                (this.props.isLoaded===true&&this.props.images.length===0)?<h2>Image Not Found!</h2>:null
                }
                <div id="gallery">
                    {
                        this.props.images.map((item) => {
                            return <Item key={item.id} src={item.urls.regular} />
                        })
                    }
                </div>
                {
                    (this.props.images.length > 11) ? <Loadmore/> : null
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    images: state.imgItems.imgArray,
    isLoaded:state.imgItems.isLoaded
})
export default connect(mapStateToProps)(Gallery)