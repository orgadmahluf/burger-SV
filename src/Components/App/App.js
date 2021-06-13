import { HashRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import SignIn from "../Sign In/SignIn";
import Register from "../Register/Register";
import { AuthProvider } from "../../AuthContext.js"
import PrivateRoute from "../CurrentUser/PrivateRoute"
import CurrentUser from "../CurrentUser/PrivateRoute"
import './App.css'
function App() {
  return (
    <>
      <div>
        <h5 className="title">SvBurger</h5>
      </div>
      <div className='container'>
      <Router>
          <AuthProvider>
            <Switch>
             <PrivateRoute exact path="/" component={CurrentUser} />
             <Route  path="/HomePage" component={HomePage} />
             <Route  path="/SignIn" component={SignIn} />
             <Route  path="/SignUp" component={Register} />
            </Switch>
        </AuthProvider>
      </Router>
      </div>
    </>
  );
}

export default App;
