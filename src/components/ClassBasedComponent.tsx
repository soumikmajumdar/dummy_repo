import React, { Component } from "react";

interface IProps {}
interface IState {
  age: number;
}

export default class ClassBasedComponent extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = { age: 50 };
    this.increase = this.increase.bind(this);
  }
  increase() {
    this.setState({ age: this.state.age + 1 });
  }
  render() {
    return (
      <>
        <h1>{this.state.age}</h1>
        <button onClick={this.increase}>Increase age</button>
      </>
    );
  }
}
