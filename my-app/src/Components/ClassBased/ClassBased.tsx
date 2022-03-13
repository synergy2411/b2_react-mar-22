import React from "react";

class Todos extends React.Component {
  posts = [{ id: "p01", title: "Awesome", published: true }];

  state: {
    todos: { id: string; label: string; status: boolean }[];
    posts?: Array<any>;
  };

  constructor(props: any) {
    super(props);
    console.log("Constructor");
    this.state = {
      todos: [
        { id: "t01", label: "shopping", status: false },
        { id: "t02", label: "grocery", status: false },
      ],
    };
  }

  componentDidMount() {
    console.log("Component Did Mount");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => {
        this.setState({
          posts: posts,
        });
      });
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  onChangeLabel = () => {
    //   this.state.todos[0].label = "Planting";
    // this.posts[0].title = "Great";
    // console.log(this.posts);
    console.log(this.props);
    this.setState({
      todos: [
        { id: "t01", label: "planting", status: false },
        { id: "t02", label: "grocery", status: false },
      ],
    });
  };

  render() {
    console.log("Render", this.props, this.state);
    return (
      <>
        <div className="">
          <p>Class based component Loaded...</p>
          <p>Todo Item : {this.state.todos[0].label} </p>
          <p>Post : {this.posts[0].title} </p>
          <button onClick={this.onChangeLabel}>Change Item</button>
        </div>
        <div>
          <p>Second division</p>
        </div>
      </>
    );
  }
}

export default Todos;
