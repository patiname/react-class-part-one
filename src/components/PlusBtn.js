import React, { Component } from "react";

class PlusBtn extends Component {
  state = {
    number: 0,
  };

  render() {
    const { number } = this.state;
    return (
      <div>
        <h3>버튼을 눌러보세요~</h3>
        <div>{number}</div>
        <button
          onClick={() => {
            this.setState({ number: number + 1 });
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.setState({ number: number - 1 });
          }}
        >
          -
        </button>
      </div>
    );
  }
}

export default PlusBtn;
