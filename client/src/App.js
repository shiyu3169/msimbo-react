import React, { useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
// Layout
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Alerts from "./components/layout/Alerts";
// Pages
import Home from "./components/pages/Home";
import Students from "./components/pages/Students";
import Resources from "./components/pages/Resources";
import Profile from "./components/pages/Profile";
import Assignments from "./components/pages/Assignments";
import Videos from "./components/pages/Videos";
import Syllabus from "./components/pages/Syllabus";
import Contact from "./components/pages/Contact";
import Assessments from "./components/pages/Assessments";
import Assessment from "./components/pages/Assessment";
import Register from "./components/pages/Register";
// Actions
import { loadUser } from "./actions/authActions";

const App = ({ loadUser }) => {
  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <Router>
      <div>
        <Navbar />
        <div className="main">
          <Alerts />
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/students" component={Students} />
            <Route exact path="/resources" component={Resources} />
            <Route exact path="/user/:uid" component={Profile} />
            <Route exact path="/assignments" component={Assignments} />
            <Route exact path="/videos" component={Videos} />
            <Route exact path="/syllabus" component={Syllabus} />
            <Route exact path="/contact" component={Contact} />4
            <Route exact path="/assessments" component={Assessments} />
            <Route exact path="/assessment/:id" component={Assessment} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default connect(
  null,
  { loadUser }
)(App);
