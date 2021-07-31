import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "../Login/Login";
import Dashboard from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';

function setToken(userToken){
    sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken(){

}

function App() {
    const token = getToken();
    if(!token) {
        return <Login setToken={setToken} />
    }
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
