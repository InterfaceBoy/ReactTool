import React, { Component, Fragment } from "react";
import "../css/App.css";
import Test from "./test";

class App extends Component {
  constructor(props) {
    super(props);
    this.handelDelete = this.handelDelete.bind(this);
    this.handelOnChange = this.handelOnChange.bind(this);
    this.handelAddList = this.handelAddList.bind(this);
    this.state = {
      inputValue: "何元鹏",
      list: [1, 2, 3, 4, 5],
    };
  }
  render() {
    return (
      <Fragment>
        {/* 第一次写注释 */}
        <div className="div1">
          <p>
            <label htmlFor="1">点赞</label>
            <input
              id="1"
              value={this.state.inputValue}
              onChange={this.handelOnChange}
            ></input>
            <button onClick={this.handelAddList}>点赞</button>
          </p>
          <ul>
            {this.state.list.map((item, index) => {
              return (
                <li key={index + item}>
                  <Test
                    content={item}
                    index={index}
                    handelDelete={this.handelDelete}
                  />
                </li>

                /**
                 <li
                  key={index + item}
                  dangerouslySetInnerHTML={{ __html: item }}
                  onClick={this.handelDelete.bind(this, index)}
                ></li>
               */
              );
            })}
          </ul>
        </div>
      </Fragment>
    );
  }
  handelOnChange(e) {
    console.log(e.target.value);
    this.setState({
      inputValue: e.target.value,
    });
  }
  handelAddList() {
    this.setState({
      inputValue: "",
      list: [...this.state.list, this.state.inputValue],
    });
  }
  handelDelete(index) {
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({
      lits: list,
    });
  }
}
export default App;
