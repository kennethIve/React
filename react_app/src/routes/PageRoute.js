import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import App from '../App.js';
import LoginPage from "../pages/LoginPage.js";

function PageRoute(){

    return (
        <div className="container overflow-auto mt-4" style={{marginBottom:"70px"}}>
        <Router>
            <Switch>
                <Route exact path="/">
                    <App />
                </Route>
                <Route path="/home">
                    <h1>Home Page</h1>
                </Route>
                <Route path="/login">
                   <LoginPage data={{islogin:true}}/>
                </Route>
                <Route path="/link">
                    <h1>link Page</h1>
                </Route>
                <Route path="*">
                    <h1>404 Not Found</h1>
                </Route>
            </Switch>
        </Router>
        </div>
    );
}

export default PageRoute;