import {Component} from 'react'
import '../App.css'
class Item extends Component{
    render(){
        return(
            <div id="item">
                <img src={this.props.src} alt="" width="160" height="200"/>
            </div>
        );
    }
}

export default Item;