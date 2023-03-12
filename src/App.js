import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import { Switch, Route } from "react-router-dom";
import Product from "./component/Product";
import ProductView from "./component/ProductView";
import Cart from "./component/Cart";
import Checkout from "./component/Checkout";
// import Login from "./component/Login";
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Product} />
        <Route exact path="/products/:id" component={ProductView} />
        <Route exact path="/cart" component={Cart}/>
        <Route exact path="/checkout" component={Checkout}/>
        {/* <Route exact path="/login" component={Login}/> */}
      </Switch>
    </>
  );
}

export default App;
