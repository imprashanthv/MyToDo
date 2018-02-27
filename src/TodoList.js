import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";


class TodoList extends Component {

  constructor(props, context) {
    super(props, context);
   	this.state = {
      items: []
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
  	var itemArray = this.state.items;
  	if (this.todoinput.value !== "") {
  	itemArray.unshift({
  	    text: this.todoinput.value,
  	    key: Date.now()
  	});
  	this.setState({
  	  items: itemArray
  	});
  	this.todoinput.value = "";
  	}
  	e.preventDefault();
  }

  deleteItem(key) {
  var filteredItems = this.state.items.filter(function (item) {
    return (item.key !== key);
  });

  this.setState({
    items: filteredItems
  });
}
  render() {
    var show;
    show={
      display:'none'
    };
    var showToDo = this.props.show;
    if(showToDo){
        show={
        display:'block'
      };
    }
    return (

      <div className="todoListMain" style={show}>
        <div className="header">
        <blockquote class="blockquote text-center"> ADD TODO </blockquote>
          <form onSubmit={this.addItem}>
            <div className="input-group mb-3">
              <input ref={(a) => this.todoinput = a} className="form-control" placeholder="Add your todo here" aria-label="Add your todo here" aria-describedby="basic-addon2">
              </input>
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="submit">
                  <i className="fas fa-plus"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
        <TodoItems entries={this.state.items}
        			delete={this.deleteItem}/>
      </div>
    );
  }
}

export default TodoList;
