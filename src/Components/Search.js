import { Component } from 'react';
import '../App.css'
import {connect} from 'react-redux'
import {fetchImageRequest} from '../redux'
class Search extends Component {
    constructor(props) {
        super(props)
        this.state={
            term:""
        }
    }
    // loadmore(){
    //     fetch(`https://api.unsplash.com/search/photos?client_id=3IvfH2FWSe4PZws1QOxsLtBRpdAlVeGWvuvH3CF2sHc&query=${this.state.text}&orientation=landscape&per_page=16&page=${this.state.pageno}`)
    //         .then(res => res.json())
    //         .then(res => this.setState({ images: this.state.images.concat(res.results), pageno:this.state.pageno+1 }))
    // }
    render() {
        return (
            <div>
                <div className='mydiv'>
                    <input type="text" placeholder="Search for photos" value={this.state.term} onChange={e => this.setState({ term: e.target.value })} />
                    <button className='search' onClick={()=>this.props.fetchImageRequest}>Search</button>
                </div>
                
                {/* {
                    (this.state.images.length>0)?<button id="load" onClick={()=>this.loadmore()}>Loadmore</button>:<></>
                } */}
                
            </div>
        );
    }
}
const mapStateToProps=state=>{
    return {
         name:state.name

    }
}
const mapDispatchToProps = dispatch=>{
    return {
        fetchImageRequest:() => dispatch(fetchImageRequest(this.state.term))
    }
}
export default connect (
    mapStateToProps,
    mapDispatchToProps
)(Search)