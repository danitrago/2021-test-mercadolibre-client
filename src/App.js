import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Layout from "./Layout";
import ProductDetails from "./views/ProductDetails";
import Search from "./views/Search";

function App() {
  return (
    <Layout>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/items?search=apple">Buscador</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/items/:id">
              <ProductDetails />
            </Route>
            <Route path="/items">
              <Search />
            </Route>
            <Route path="/">Home</Route>
          </Switch>
        </div>
      </Router>
    </Layout>
  );
}

export default App;
