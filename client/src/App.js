import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
// Layout
import Navbar from "./components/layout/Navbar";
// Components
import Home from "./components/Home";
import Curriculum from "./components/Curriculum";
import Students from "./components/students/Students";
import Resources from "./components/resources/Resources";
import Profile from "./components/profile/Profile";
import PrivateRoute from "./components/auth/PrivateRoute";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Navbar />
                        <Switch>
                            <Route exact path="/" component={Home} />,
                            <Route
                                exact
                                path="/curriculum"
                                component={Curriculum}
                            />
                            ,
                            <Route
                                exact
                                path="/students"
                                component={Students}
                            />
                            <Route
                                exact
                                path="/resources"
                                component={Resources}
                            />
                            <PrivateRoute
                                exact
                                path="/user/:id"
                                component={Profile}
                            />
                        </Switch>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
