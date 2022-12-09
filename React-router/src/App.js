import { Route } from "react-router-dom";
import Products from "./component/Products";
import Welcome from "./component/Welcome";
function App() {
  return (
    <div>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
    </div>
  );
}

export default App;
