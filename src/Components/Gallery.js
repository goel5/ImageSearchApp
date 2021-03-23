import { Component } from 'react';
import '../App.css'
import Item from './Item'
import {connect} from 'react-redux'
class Gallery extends Component {
    render() {
        return (
            <div id="gallery">
                {
                    this.props.imgArray.length > 0?
                    this.state.imgArray.map(item => {
                        return (<Item key={item.id} src={item.urls.regular} />);
                    }):<></>
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
const mapDispatchToProps = dispatch=>{
    return {
    }
}
export default connect (
    mapStateToProps,
    mapDispatchToProps
)(Gallery)