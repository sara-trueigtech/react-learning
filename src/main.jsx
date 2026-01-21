import React from "react";
import { createRoot } from "react-dom/client";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "sara" };
  }

  componentDidMount() {
    console.log("componentDidMount()");
  }

  changeState() {
    this.setState({ name: "angel" });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate()");
    return true;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate()");
  }

  render() {
    return (
      <div>
        <h1>
          Hello {this.state.name}
        </h1>
        <h2>
          <a onClick={this.changeState.bind(this)}>
            click
          </a>
        </h2>
      </div>
    );
  }
}

const root = createRoot(document.getElementById("root"));
root.render(<Test />);
