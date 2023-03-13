import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import { Switch, Route } from "react-router-dom";
import Product from "./component/Product";
import ProductView from "./component/ProductView";
import Cart from "./component/Cart";
import Checkout from "./component/Checkout";
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
      </Switch>
    </>
  );
}

export default App;
