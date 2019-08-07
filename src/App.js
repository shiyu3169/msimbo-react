import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Layout
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
// Components
import Home from "./components/Home";
import Students from "./components/students/Students";
import Resources from "./components/resources/Resources";
import Profile from "./components/profile/Profile";
import Assignments from "./components/assignments/Assignments";
import Youtubes from "./components/youtube/Youtubes";
import Syllabus from "./components/layout/Syllabus";
import Contact from "./components/layout/Contact";
import Assessments from "./components/assessment/Assessments";
import Assessment from "./components/assessment/Assessment";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <div class="main">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/students" component={Students} />
              <Route exact path="/resources" component={Resources} />
              <Route exact path="/user/:uid" component={Profile} />
              <Route exact path="/assignments" component={Assignments} />
              <Route exact path="/videos" component={Youtubes} />
              <Route exact path="/syllabus" component={Syllabus} />
              <Route exact path="/contact" component={Contact} />4
              <Route exact path="/assessments" component={Assessments} />
              <Route exact path="/assessment/:id" component={Assessment} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
