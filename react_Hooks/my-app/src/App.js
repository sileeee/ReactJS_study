import React, { Component, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div> {count} </div>
      <button onClick={() => setCount(count +1)}>Increment</button>
    </>
  );
};
export default App;

// useState는 value를 주거나 이를 변경할 수 있다. 
// useState가 array을 반환하므로 [count, setCount]array로 작업 -> 0부터 시작
// 