import React from "react";

class App extends React.Component {
  state = {
    isLoading: true, //mount되자마자
    movies: [] //movie state (미래에 쓰고자하는 state를 선언하는 것은 필수가 아님)
  };
  componentDidMount() { //여기서 data를 fetch함
    setTimeout(() => { //delay function(java script)
      this.setState({ isLoading: false }); 
    }, 6000); //6초후 실행
  }
  render() {
    const { isLoading } = this.state; //es6
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>; //javascript 삼항연산자
  }
}

export default App;