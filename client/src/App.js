import React, { useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
// Layout
import Navbar from './components/Navbar/Navbar';
import Footer from './components/layout/Footer';
import Alerts from './components/layout/Alerts';
// Pages
import Home from './pages/Home/Home';
import Students from './pages/students/Students';
import Resources from './pages/Resources';
import Profile from './pages/Profile/Profile';
import Assignments from './pages/Assignments';
import Videos from './pages/Videos';
import Syllabus from './pages/Syllabus';
import Contact from './pages/Contact';
import Assessments from './pages/Assessments';
// import Assessment from "./pages/Assessment";
import FooterPopup from './components/FooterPopup/FooterPopup.component';
import Register from './pages/Register';
// Actions
import { loadUser } from './actions/authActions';
import PrivateRoute from './components/routing/PrivateRoute';

const App = ({ loadUser }) => {
  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <Router>
      <div>
        <Navbar />
        <div className='main'>
          <Alerts />
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/students' component={Students} />
            <Route exact path='/resources' component={Resources} />
            <Route exact path='/user/:uid' component={Profile} />
            <Route exact path='/assignments' component={Assignments} />
            <Route exact path='/videos' component={Videos} />
            <Route exact path='/syllabus' component={Syllabus} />
            <Route exact path='/contact' component={Contact} />
            <PrivateRoute exact path='/assessments' component={Assessments} />
            {/* <Route exact path="/assessment/:id" component={Assessment} /> */}
            <Route path='/' component={Home} />
          </Switch>
        </div>
        <FooterPopup />
        <Footer />
      </div>
    </Router>
  );
};

export default connect(null, { loadUser })(App);
