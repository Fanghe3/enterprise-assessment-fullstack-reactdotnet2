import React from "react";

import Post from "./components/Post";
import Feed from "./components/Feed";
import { Create } from "./components/Create";
import Admin from "./components/Admin";
/*
  READ THESE COMMENTS AS A PART OF STEP TWO

  To manage switching among the different views in this application, 
  we have implemented a "view switcher" in the `App` component. 

  There are three key parts to the view switcher:
    1. The `view` property defined on the `App` component's `state`
    2. The `changeView` method defined on the `App` component
    3. The `renderView` method defined on the `App` component

  The value of the `view` property will determine which gets returned by the
  `renderView` method, which is invoked inside the `App` component's `render`. 
  You can set the initial value of `view` in the `App` component's `constructor`
  function, determining what view gets rendered "by default".

  If you haven't modified this code yet, the view switcher observes the following rules:
  - The default view is 'feed'
  - If the view is set to 'feed', the `<Feed>` component is displayed
  - If the view is set to any other value, the `<Post>` component is displayed
  - The `changeView` function should change the value of `view` in the `App` component's state.

  You'll make some refactors and additions to this view switcher throughout the
  next steps of the assessment. When you're ready, return to the README.
*/

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      view: "feed",
      selectedItem: 0,
      blogs: [],
      error: null
    };

    this.changeView = this.changeView.bind(this);
  }

  changeView(option, e) {    
      this.setState({
        view: option,
        selectedItem:
          option === "feed" || option === "Create" || option === "Admin"
            ? 0
            : e.currentTarget.parentNode.id,
      });
  }

  renderView() {
    const { view, selectedItem } = this.state;

    if (view === "feed") {
      return (
        <Feed
          blogs={this.state.blogs}
          handleClick={(event) => {
            this.changeView("onePost", event);
          }}
        />
      );
    } 
    if (view === "onePost") {
      return <Post blogs={this.state.blogs} id={selectedItem} />;
    }
    if (view === "Admin") {
      return <Admin blogs={this.state.blogs}  />;
    }
    if (view === "Create") {

      console.log("connection", this.props.connection);
      return (
        <Create blogs={this.state.blogs} connection={this.props.connection} />
      );
    }
  }

  componentDidMount() {
    fetch(`${this.props.connection}getblogs`)
      .then((response) => response.json())
      .then(
        (result) => {
          this.setState({            
            blogs: result,
          });
        },
        (error) => {
          this.setState({            
            error,
          });
        }
      );
  }

  render() {
    return (
      <div>
        <div className="nav">
          <span className="logo" onClick={() => this.changeView("feed")}>
            BLOGMODO
          </span>
          <span
            className={
              this.state.view === "feed" ? "nav-selected" : "nav-unselected"
            }
            onClick={() => this.changeView("feed")}
          >
            See all Posts
          </span>
          <span
            className={
              this.state.view === "Create" ? "nav-selected" : "nav-unselected"
            }
            onClick={() => this.changeView("Create")}
          >
            Write a Post
          </span>
          <span
            className={
              this.state.view === "Admin" ? "nav-selected" : "nav-unselected"
            }
            onClick={() => this.changeView("Admin")}
          >
            Admin
          </span>
        </div>

        <div className="main">{this.renderView()}</div>
      </div>
    );
  }
}

export default App;
