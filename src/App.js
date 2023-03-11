import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import { Switch, Route } from "react-router-dom";
import Product from "./component/Product";
import ProductView from "./component/ProductView";
import Cart from "./component/Cart";
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Product} />
        <Route exact path="/products/:id" component={ProductView} />
        <Route exact path="/cart" component={Cart}/>
      </Switch>
    </>
  );
}

export default App;
