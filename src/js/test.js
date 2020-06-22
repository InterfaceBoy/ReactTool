import React, { Component,Fragment } from "react";
import propTypes from "prop-types";
class test extends Component {
  constructor(props) {
    super(props);
    this.handelClick = this.handelClick.bind(this);
    this.state = {};
  }

  render() {
    return (
      <Fragment> 
        <div onClick={this.handelClick}>
          <p>{this.props.content}</p>
        </div>
    </Fragment>
    );
  }
  handelClick() {
    this.props.handelDelete(this.props.index);
  }
}
// 必传和数据类型校验
test.propTypes = {
  content: propTypes.string,
  index: propTypes.number.isRequired,
};
// 传参默认值
test.defaultProps = {
  content: "美女",
  index: 0,
};

export default test;
