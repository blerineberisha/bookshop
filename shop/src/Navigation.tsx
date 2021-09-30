import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";


import AllBooks from "./AllBooks";
import Signup from "./Signup";
import Home from "./Home";
import { SingleBook } from "./SingleBook";
function Navigation() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}></Route>
      <Route path="/all" exact component={AllBooks}></Route>
      <Route path="/home" exact component={Home}></Route>
      <Route path="/book/:id" exact component={SingleBook}></Route>
      <Route path="/signup" exact component={Signup}></Route>
    </BrowserRouter>
  );
}
export default Navigation;