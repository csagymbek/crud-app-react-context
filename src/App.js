import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { AddUser } from "./components/AddUser";
import { EditUser } from "./components/EditUser";
import { Home } from "./components/Home";
import { GlobalContextProvider } from "./context/context";

export const App = () => {
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <GlobalContextProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add" component={AddUser} />
            <Route path="/edit/:id" component={EditUser} />
          </Switch>
        </Router>
      </GlobalContextProvider>
    </div>
  );
};
