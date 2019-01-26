import React, {Component} from 'react';
import Photo from './Photo'


function PhotoWall(props){
  return(
   <div className="photoGrid">
    {props.posts.map((post, index) => <Photo key={index} post={post}/>)}
   </div>)
}

// Stateless Component prior to making it Stateless
// class PhotoWall extends Component {
//   render(){
//     return(
//      <div className="photoGrid">
//       {this.props.posts.map((post, index) => <Photo key={index} post={post}/>)}
//      </div>)
//   }
// }

export default PhotoWall
