import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Layout
import Navbar from './components/layout/Navbar';
// Components
import Home from './components/Home';
import Students from './components/students/Students';
import Resources from './components/resources/Resources';
import Profile from './components/profile/Profile';
import Assignments from './components/assignments/Assignments';
import Youtubes from './components/youtube/Youtubes';
import Syllabus from './components/layout/Syllabus';
import Contact from './components/layout/Contact';
import StudentQuiz from './components/quiz/StudentQuiz';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/students' component={Students} />
            <Route exact path='/resources' component={Resources} />
            <Route exact path='/user/:uid' component={Profile} />
            <Route exact path='/assignments' component={Assignments} />
            <Route axact path='/videos' component={Youtubes} />
            <Route exact path='/syllabus' component={Syllabus} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/quiz' component={StudentQuiz} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
