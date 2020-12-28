import React from 'react'
import PropTypes from "prop-types"

// fuction component를 class component로 변경
class App extends React.Component { //react는 모든 class component의 render method를 자동으로 실행함
  state = {
    count: 0 //바꿀 데이터를 state안에 넣음
  };



  //데이터 바꾸는 함수(javascript코드임 react(x))
  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
    //this.state.count = 1;처럼 쓰지 않는 이유(직접 state변경 x)
    // -> 매번 state의 상태를 변경할 경우, react가 render function을 호출해서 바꿔주어야 함
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  };
  // 외부의 state에 의존하면 성능 문제로 나중에 문제 될 수 있기 때문에 this.setState({count: this.state.count -1});로 작성 안한 것임
  // function방식을 통해 current로 현재 state를 가져옴


  render() { //function이 아니므로 return 하지 않고 react component가 가진 render method를 가짐
    return ( //screen에 표시
      <div>
        <h1>The number is: {this.state.count}</h1>
        {/* onClick은 react에서 자동적으로 주어진 것 */}
        <button onClick={this.add}>Add</button> 
        <button onClick={this.minus}>Minus</button>
        {/* add()나 minus()로 안 쓰고 add, minus로 작성하는 이유는 즉시 실행하는 것이 아니라 버튼이 클릭된 후에 실행하는 것이기 때문 */}
      </div>
    );
  }
}


export default App;
