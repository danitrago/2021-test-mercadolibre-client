import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./Layout";
import ProductDetails from "./views/ProductDetails";
import Search from "./views/Search";

function App() {
  return (
    // HOC High Order Component, componente de alto nivel para Layout
    <Layout>
      Ejemplo v2
      <Router>
        <Switch>
          <Route path="/items/:id">
            <ProductDetails />
          </Route>
          <Route path="/items">
            <Search />
          </Route>
          <Route path="/"></Route>
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
