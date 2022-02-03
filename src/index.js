import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Table from "./components/Table";
import Password from "./components/Password";
import Detail from "./components/Detail";




const Routing = () => {
  console.log("inside index file");
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/article/details" component={Detail} />
        <Route path="/articles" component={Table} />
        <Route exact path="/" component={App} />
        <Route exact path="/password" component={Password} />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<Routing />, document.getElementById("root"));
