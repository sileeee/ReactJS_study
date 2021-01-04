import React from "react";

class Detail extends React.Component {
    componentDidMount() {
      const { location, history } = this.props; //현재 props에서 location과 history를 가져옴
      if (location.state === undefined) {
        history.push("/");
      }
    }
    render() {
        const { location } = this.props;
        if (location.state) {
          return <span>{location.state.title}</span>;
        } else {
          return null;
        }
    }
}
export default Detail;