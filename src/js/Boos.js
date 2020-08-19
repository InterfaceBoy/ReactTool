import React, { Component, Fragment } from "react";
class Boos extends Component {
  constructor(props) {
    super(props);
    this.handelBoss = this.handelBoss.bind(this);
    this.state = {
      isShow: false,
    };
  }
  render() {
    return (
      <Fragment>
        <div className={this.state.isShow ? "show" : "hide"}>boss名称</div>
        <div>
          <button onClick={this.handelBoss}>召唤boss</button>
        </div>
      </Fragment>
    );
  }
  handelBoss() {
    console.log(1);
    this.setState({
      isShow: this.state.isShow ? false : true,
    });
  }
}

export default Boos;
