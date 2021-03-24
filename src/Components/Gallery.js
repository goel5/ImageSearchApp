import React, { Component } from 'react';
import '../App.css'
import { connect } from 'react-redux'
import Item from './Item'
import Loadmore from './Loadmore'
class Gallery extends Component {
    render() {
        return (
            <div>
                <div id="gallery">
                    {
                        this.props.images.map((item) => {
                            return <Item key={item.id} src={item.urls.regular} />
                        })
                    }
                </div>
                {
                    (this.props.images.length > 15) ? <Loadmore/> : null
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    images: state.imgItems.imgArray
})
export default connect(mapStateToProps)(Gallery)