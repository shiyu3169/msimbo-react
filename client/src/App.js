import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Layout
import Navbar from "./components/layout/Navbar";
// Components
import Home from "./components/Home";
import Curriculum from "./components/Curriculum";
import Students from "./components/students/Students";
import Resources from "./components/resources/Resources";
import Profile from "./components/profile/Profile";

class App extends Component {
    render() {
        return (
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
                        ,<Route exact path="/students" component={Students} />
                        <Route exact path="/resources" component={Resources} />
                        <Route exact path="/user/:uid" component={Profile} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default App;
