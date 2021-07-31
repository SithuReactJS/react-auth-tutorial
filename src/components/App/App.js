import { React } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';

function App() {
    return (
        <div className="wrapper">
            <h1>Application</h1>
            <BrowserRouter>
            <Switch>
                <Route path="/dashboard">
                    <Dashboard/>
                </Route>
                <Route path="/preferences">
                    <Preferences/>
                </Route>
            </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
