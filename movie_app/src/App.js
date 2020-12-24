import React from 'react'

function Food({fav}){ /* (props) 또는 props내부의 fav사용 가능 - ({fav})*/
  // console.log(props);
  return <h3> I like {fav}</h3>
  // return <h3> I like {props.fav}</h3>
}

function App() {
  return (
    <div>
      hello
      <Food fav="kimchi" /*food컴포넌트에 정보(fav라는 prop(erty)+value)를 보냄 */
      something = {true}
      papapa = {["hello", 1, 2, true]}/>
      <Food fav = "ramen"/>
      
      
    </div>
    
  );
}

export default App;
