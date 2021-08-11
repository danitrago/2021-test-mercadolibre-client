import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Layout from "./Layout";
import ProductDetails from "./views/ProductDetails";
import Search from "./views/Search";

function App() {
  return (
    <Layout>
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
