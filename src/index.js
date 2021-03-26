import React, {Component} from "react";

import ReactDOM from "react-dom";
import "./index.css";

//Router
import {
  BrowserRouter as Router, // Router буде псевдонімом до BrowserRouter
  Switch,  
  Route,   
} from "react-router-dom";

import Header from "./Components/Header/header";
import ToDoList from "./Components/ToDoList/toDoList";
// import AddToDo from "./Components/AddToDo/addToDo";
// import EditToDo from "./Components/EditContact/editContact";
import Error404 from "./Components/Error404/error404";

//REDUX store
import store from "./store";
import { Provider } from "react-redux";

class App extends Component { 
  render(){
    return(
      <Provider store={store}> 
          <Router>
          <Header /> 
            <Switch>
              <Route path="/" exact component={ToDoList} />
              {/* <Route path="/add-todo" exact component={AddDoList} /> */}
              <Route component ={Error404} /> 
            </Switch>
          </Router>
      </Provider> 
    )
  }
}
ReactDOM.render(<App />, document.getElementById("root"));