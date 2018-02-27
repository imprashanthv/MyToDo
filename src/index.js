import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList";
import NavbarTodo from "./NavbarTodo";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.css";

var destination = document.querySelector("#container");
var navdest = document.querySelector(".putnavbarhere");
var clicked=false;


class index extends Component{
  constructor() {
    super();
    this.state = {show: true};
    this.handleAbout = this.handleAbout.bind(this);
    this.hideBody=this.hideBody.bind(this);
  }

  componentDidMount(){
    this.hideBody();
  }

  hideBody(){
    this.setState=({
      show:false
    });
  }

  handleAbout(){
    this.hideBody();
    clicked=!clicked
    if(clicked){
      console.log(this.state.show);
      ReactDOM.render(
        <Footer />,
        document.querySelector("#toast")
      )
      }
      else{
        ReactDOM.render(
          <p> </p>,
          document.querySelector("#toast")
        )
    };

  }
}

var indObj = new index();

ReactDOM.render(
    <div>
       <TodoList show={indObj.state.show}/>
    </div>,
    destination

);

ReactDOM.render(
    <NavbarTodo clicked={indObj.handleAbout}/>,
    navdest
);
