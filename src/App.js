import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./componets/navbar/Header";
import Home from "./componets/pages/Home";
import Adduser from "./componets/pages/Adduser";
import Notfount from "./componets/pages/Notfount";
import Edituser from "./componets/pages/Edituser";
import PageNation from "./componets/pages/PageNation";  
function App() {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path='/adduser' exact component={Adduser}/>
          <Route path='/edituser/:id' exact component={Edituser}/>
          <Route path="/pagenation" exact component={PageNation}/>  
          <Route component={Notfount}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
