import React, { Component, Fragment } from "react";
import "../css/App.css";
import Test from "./test";
import Boss from "./Boos";
import axios from "axios"

class App extends Component {
  constructor(props) {
    super(props);
    this.handelDelete = this.handelDelete.bind(this);
    this.handelOnChange = this.handelOnChange.bind(this);
    this.handelAddList = this.handelAddList.bind(this);
    this.state = {
      inputValue: "泷泽萝拉",
      list: [],
    };
  }
  componentWillReceiveProps(){

  }
  componentDidMount(){
    // 写在mount中避免多次加载，建议将axios写在mount中
    axios.get('https://www.easy-mock.com/mock/5eeec4c94d226b23f958e1ef/example/reactAv')
      .then(  response=> {
        console.log(response);
        this.setState({
          list:response.data.data
        })
      })
      .catch( (error)=> {
        console.log(error);
      });
    /* axios.post('/user', {
        firstName: 'Fred',
        lastName: 'Flintstone'
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      }); */
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
              ref={(input)=>{this.input=input}}
              onChange={this.handelOnChange}
            ></input>
            <button onClick={this.handelAddList}>点赞</button>
          </p>
          <ul ref={(ul)=>{this.ul=ul}}>
            {this.state.list.map((item, index) => {
              return (
                <li key={index + item}>
                  <Test
                    content={item}
                    index={index}
                    handelDelete={this.handelDelete}
                  />
                </li> 
              );
            })}
          </ul>
        </div>
        <Boss></Boss>
      </Fragment>
    );
  }
  handelOnChange(e) { 
    this.setState({
      inputValue:this.input.value // e.target.value,
    });
  }
  handelAddList() {
    // setState属于异步函数，所以在使用的时候我们需要做统计是要在她的回调函数中统计
    this.setState({
      inputValue: "",
      list: [...this.state.list, this.state.inputValue],
    },(()=>{
        console.log(this.ul.querySelectorAll("li").length)
    }));
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
