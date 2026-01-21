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
      <>
        <h1>
          Hello {this.state.name}
        </h1>
          <button onClick={this.changeState.bind(this)}>
            click
          </button>
      </>
    );
  }
}

const root = createRoot(document.getElementById("root"));
root.render(<Test />);
