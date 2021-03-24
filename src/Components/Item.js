import {Component} from 'react'
import '../App.css'

class Item extends Component{
    render(){
        return(
            <div id="item">
                <img src={this.props.src} alt="../imgNotFound" width="200" height="200"/>
            </div>
        );
    }
}

export default Item;