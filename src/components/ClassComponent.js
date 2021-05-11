import React, { Component } from "react";

class ClassComponent extends Component {
  render() {
    //console.log(this.props);
    const menu = this.props.menu;
    const side = this.props.side;
    //console.log(menu, side);

    return (
      <div>
        <h3>클래스형 컴포넌트</h3>
        <h5>
          오늘의 메뉴는 {menu}로 정했고, 사이드메뉴로는 {side}로 결정했어!
        </h5>
      </div>
    );
  }
}

export default ClassComponent;
