import React from "react";

const FnComponent = ({ name, age }) => {
  console.log(name, age);
  return (
    <div>
      <h3>함수형 컴포넌트</h3>
      <h4>
        안녕 내이름은 {name}이야 나이는 {age}세 이지
      </h4>
    </div>
  );
};

export default FnComponent;
