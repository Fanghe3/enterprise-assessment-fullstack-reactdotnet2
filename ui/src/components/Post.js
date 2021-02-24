import moment from 'moment';
import React from 'react';
import  samplePosts from '../sampleData.js';

const Post = (props) => (
   <div>
  { samplePosts.filter(p => (p._id === props.id) ).map( samplePost => ( 
    <div className="post">  
    <h1 className="post-title"> {samplePost.title} </h1>
    <div className="post-byline"> <span className="post-byline-author">{samplePost.author}</span> {moment(samplePost.createdAt,"YYYYMMDD").fromNow()}</div>
    <img src= {samplePost.imageUrl} className="post-image"/>
    <p>{samplePost.body} </p>
   </div>
    ) )}
    
   </div>   
 
)

export default Post;
