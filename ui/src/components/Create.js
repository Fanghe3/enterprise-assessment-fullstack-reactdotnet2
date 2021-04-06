import moment, { now } from 'moment';
import React, { Component } from "react";
 

export class Create extends Component {
  constructor() {
    super();

    this.state = {
      post: {
        title: "",
        author: "",
        imageUrl: "",
        body: "",
        createdAt: new Date(),
        //    seller: this.props.currentUser,
        //    isApproved: this.props.isAdmin ? true : false,
      },
      alert: false,
      alertMessage: "",
    };
  }

  handleReset = () => {
    this.setState({
      post: {},
    });
  };

  handleChange = ({ target }) => {
    const name = target.name;
    const value = target.value;
    var postState = { ...this.state.post };
    postState[name] = value;
    this.setState({
      // seller: this.props.currentUser,
      post: postState,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    var badVin = "";
    this.setState({
      alertMessage: badVin
        ? "VIN is not valid"
        : "We are not accepting vehicles of this type at the moment",
      alert: true,
    });

    this.addPost(this.state.post);
  };

  addPost = (post) => {
        this.postData(post, `${this.props.connection}postblog`);
  };

  postData = async (data, url) => {
    console.log("dddddd::::", data);
    console.log("ffffff::::", url);
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response;
  };

  render() {
    return (
      <div class="create">
        <div class="create-editor">
          <h2>AUTHOR</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              class="create-input"
              type="text"
              name="title"
              placeholder="Post Title"
              onChange={this.handleChange}
            ></input>
            <input
              class="create-input"
              type="text"
              name="author"
              placeholder="Author"
              onChange={this.handleChange}
            ></input>
            <input
              class="create-input"
              type="text"
              name="image"
              placeholder="Image URL"
              onChange={this.handleChange}
            ></input>
            <textarea
              class="create-body-textarea"
              name="body"
              placeholder="Post Body"
              onChange={this.handleChange}
            ></textarea>
            <button class="create-submit-button" type="submit">
              Save post
            </button>
          </form>
        </div>
        <div class="create-preview">
          <h2>PREVIEW</h2>
          <div className="post">
            <h1 className="post-title"> {this.state.post.title} </h1>
            <div className="post-byline">
              {" "}
              <span className="post-byline-author">
                {this.state.post.author}
              </span>{" "}
              {moment(this.state.post.createdAt, "YYYYMMDD").fromNow()}
            </div>
            <img src={this.state.post.imageUrl} className="post-image" alt="" />
            <p>{this.state.post.body} </p>
          </div>
        </div>
      </div>
    );
  }
}