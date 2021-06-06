import Navbar from "./components/layouts/Navbar";
import Contacts from "./components/contacts/Contacts";
import "./styles/App.scss";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateContact from "./components/contacts/CreateContact";
import EditContact from "./components/contacts/EditContact";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App wrapper">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts}  />
              <Route exact path="/contacts/createcontact" component={CreateContact}  />
              <Route exact path="/contacts/EditContact/:id" component={EditContact}  />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
