import React, { Component } from "react";

const style = {
  container: {
    width: "100vw",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  p: {
    color: "#636A72"
  }
};

export default class Footer extends Component {
  render() {
    return (
      <div style={style.container}>
        <p style={style.p}>
          Created after a 10 weeks Bootcamp @La Capsule Academy
        </p>
      </div>
    );
  }
}
