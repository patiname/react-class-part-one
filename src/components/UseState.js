import React, { useState } from "react";

const arr = [1, 2];
// console.log(arr[0]);
// console.log(arr[1]);

// const [one, two] = arr;
// console.log(one, two);

const UseState = () => {
  const [num, setNum] = useState(0);

  return (
    <div>
      <h3>버튼 눌러보기!</h3>
      <div>{num}</div>
      <button onClick={() => setNum(num + 1)}>+</button>
      <button onClick={() => setNum(num - 1)}>-</button>
    </div>
  );
};

export default UseState;
