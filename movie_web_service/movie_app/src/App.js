import React from 'react'
import PropTypes from "prop-types"

const foodILike = [
  {
    id: 1, //(key관련 error 해결)id는 기본적으로 react내부에서 사용하기 위한 것임
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating : 5
    },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating : 4.9
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating : 4.8
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating : 5.5
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating : 4.7
  }
];
function Food({name, picture, rating}){ /* (props) 또는 props내부의 fav사용 가능 - ({fav})*/
  // console.log(props);
  return (<div>
    <h3> I like {name}</h3>
    <h4>{rating}/5.0</h4>
    <img src = {picture} alt={name}/>
    </div>
  );
  // return <h3> I like {props.fav}</h3>
}
Food.propTypes = { //required를 호출하는 방식으로 type과 required를 체크 가능
  name: PropTypes.string.isRequired,
  picture:PropTypes.string.isRequired,
  rating:PropTypes.number.isRequired //isRequired는 number이 필수는 아니라는 의미(undefined일수도 있음)
};
// 다른 많은 propTypes가 존재함(react가 지원하는)

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} 
        name={dish.name} 
        picture={dish.image} 
        rating={dish.rating} />
      ))}
    </div>
  );
}


export default App;
