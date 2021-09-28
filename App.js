import React, { Fragment} from "react";
import AddBookForm from "./components/AddBookForm";
import Book from "./components/Book";
import "./App.css";
import Search from "./components/Search";
import {BrowserRouter, Switch, Route} from "react-router-dom";


function App() {
  return (
    <Fragment>
      <BrowserRouter>
      <Switch>
      
        <Route path="/home">
        <Route path="/home">
          <Search/>
        </Route>
        <Route path="/home">
         <AddBookForm />
        </Route>
        <Route path="/home">
         <Book/>
      </Route>
      </Route>
      </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
