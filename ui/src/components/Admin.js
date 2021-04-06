import moment from 'moment';
import React from 'react';
 

const Admin = (props) => (
  <div className="feed">
    {props.blogs
      .slice()
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .map((samplePost) => (
        <ul>
          <li
            className="post-list-entry"
            key={samplePost._id}
            id={samplePost._id}
          >
            <div className="post-list-entry-title"> {samplePost.title} </div>
            <div className="post-list-entry-byline">
              <span className="feed-list-item-byline-author">
                {" "}
                {samplePost.author}
              </span>{" "}
              {moment(samplePost.createdAt, "YYYYMMDD").fromNow()}
            </div>
            <span className="post-list-entry-byline">
              {" "}
              Views: {samplePost.views}{" "}
            </span>
          </li>
        </ul>
      ))}
  </div>
);

export default Admin;
