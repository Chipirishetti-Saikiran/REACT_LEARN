import React from "react";



class Clicker extends React.Component {
  constructor() {
    super();
    this.state = { clicks: 0 };
    this.handleClick = this.handleClick.bind(this); // binding
  }

  handleClick() {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  render() {
    return <button onClick={this.handleClick}>Clicked {this.state.clicks} times</button>;
  }
}

export default Clicker;