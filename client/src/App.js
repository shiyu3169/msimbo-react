import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./components/Home";
import Curriculum from "./components/Curriculum";
import Navbar from "./components/layout/Navbar";
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
                            {/* { path : 'students', component : StudentListComponent},
  { path : 'about', component : AboutComponent},
  
  { path : 'visit/:uid', component : VisitComponent},
  { path : 'feedback', component : FeedbackComponent},
  { path : 'user', component : ProfileComponent, canActivate: [AuthenticationService]},
  { path : 'video', component : VideoComponent, canActivate: [AuthenticationService]},
  { path : 'assignment', component : AssignmentListComponent, canActivate: [AuthenticationService]},
  { path : 'assignment/:aid', component : AssignmentDetailComponent, canActivate: [AuthenticationService]},
  { path : 'wiki', component : WikiComponent, canActivate: [AuthenticationService]},
  { path : 'wiki/:wid', component : WikiDetailComponent, canActivate: [AuthenticationService]},
  { path : 'register', component : RegisterComponent, canActivate: [AuthenticationService, AdminService]} */}{" "}
                            */}
                        </Switch>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
