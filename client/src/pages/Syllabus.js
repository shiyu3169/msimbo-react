import React from "react";
import BackToTop from "../components/layout/BackToTop";

export default function Syllabus() {
  return (
    <div>
      <div className="container">
        <h1 style={{ textAlign: "center" }}>
          <b>Syllabus</b>
        </h1>
        <h3>Schedule</h3>
        <p>Class Time: M~F: 9:00 am - 4:00 pm</p>
        <p>Lunch Time: 12:00 pm - 1:00 pm</p>
        <h3>Instructor</h3>
        <p>Shiyu Wang</p>
        <p>
          E-mail: <a href="mailto:Shiyu3169@gmail.com">Shiyu3169@gmail.com</a>
        </p>
        <p>
          Profile:{" "}
          <a href="https://msimbo.herokuapp.com/user/5b212a10e7179a589281049c">
            https://msimbo.herokuapp.com/user/5b212a10e7179a589281049c
          </a>
        </p>
        <h3>Teaching Assistants</h3>
        <p>TBD from class</p>
        <h3>Course Goals</h3>
        <p>
          This course introduce various web technologies used to develop
          advanced web based applications.
        </p>
        <h3>Lectures</h3>
        <p>
          Lectures will focus on developing a practical understanding of web
          application development.
        </p>
        <h3>Assignments</h3>
        <p>
          The assignments are used as an example of applying the concepts to
          solve a practical problem. The assignments consist of building a
          complete web application using various technologies. The assignments
          give students the opportunity to practice what is discussed in class
          to achieve a practical level of understanding of the concepts.
        </p>
        <h3>Team Project</h3>
        <p>
          The goal of the projcet is to gain hands-on experience with developing
          a full web application from the ground up.
        </p>
        <p>
          Students will be conducted in group of 3~4 people to collaborate on a
          team project due at the end of the course. The team projects will
          allow students to collaboratively complete a web application from
          start to finish, including design & creation/optimization, as well as
          a dynamic user-interface.
        </p>
        <h3>Reading</h3>
        <p>
          Students are expected to read the materials or view assigned videos in
          preparation of each lecture
        </p>
        <h3>Make-up Policy</h3>
        <p>
          All assignments and project milestones are due at midnight on their
          due data. Late submissions will be penalized one percent for every
          hour late. For example, an on-time submission might receive a grade of
          90 points. The same assignemnt submitted 5 hours after the deadline
          whould be deducted 5 points and receive an 85.
        </p>
        <p>
          Students who miss scheduled quizzes will not, as matter of course, be
          able to make up those quizzes. If there is a legitimate reason why a
          student will not be able to complete an assignment on time or not be
          present for a quiz, then they should contact the instructor
          beforehand. Under extreme circumstances, as devided on a case-by-case
          basis by the instructor, students may be allowed to make up
          assignemnts or quizs wihout first informing the instructor.
          Assignments might have bonus options that can be completed at anytime
          to compensate for missed work.
        </p>
        <h3>Submission</h3>
        <p>
          Submissions will be made via GitHub. Each assignment will have
          instructions on what to submit, but generally student will create a
          release in GitHub repository. and or an online hosted server running a
          web application. Code is expected to be professional and porperly
          documented; any required data files and library dependencies must be
          resolvable via pom.xml or package.json files. All source code must be
          available through the GitHub repository. Instructors must be able to
          clone the repository, build, and run your project from their local
          environments.
        </p>
        <h3>Evaluation</h3>
        <p>The Final grade for this course will be weighted as follows:</p>
        <ul>
          <li>Assignments: 35%</li>
          <li>Quizzes: 30%</li>
          <li>
            Project: 35%
            <ul>
              <li>Description/Proposal 5%</li>
              <li>Design 5%</li>
              <li>Prototype 5%</li>
              <li>Implementation 85%</li>
            </ul>
          </li>
        </ul>
        <p>Final grades will be assigned based on the following scale:</p>
        <table border="2">
          <thead>
            <tr>
              <th>Grade</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A</td>
              <td>94-100</td>
            </tr>
            <tr>
              <td>A-</td>
              <td>{"90-<94"}</td>
            </tr>
            <tr>
              <td>B+</td>
              <td>{"87-<90"}</td>
            </tr>
            <tr>
              <td>B</td>
              <td>{"84-<87"}</td>
            </tr>
            <tr>
              <td>B-</td>
              <td>{"80-<84"}</td>
            </tr>
            <tr>
              <td>C+</td>
              <td>{"77-<80"}</td>
            </tr>
            <tr>
              <td>C</td>
              <td>{"74-<77"}</td>
            </tr>
            <tr>
              <td>C-</td>
              <td>{"70-<74"}</td>
            </tr>
            <tr>
              <td>D+</td>
              <td>{"67-<70"}</td>
            </tr>
            <tr>
              <td>D</td>
              <td>{"64-<67"}</td>
            </tr>
            <tr>
              <td>D-</td>
              <td>{"60-<64"}</td>
            </tr>
            <tr>
              <td>F</td>
              <td>{"<60"}</td>
            </tr>
          </tbody>
        </table>
        <br />
        <h3>Class Environment</h3>
        <p>
          To create and preserve a classroom atmosphere that optimizes teaching
          and learning, all participants share a responsibility in creating a
          civil and non-disruptive forum for the discussion of idea. Sutdents
          are expected to conduct themselves at all times in a manner that does
          not disrupt teaching or learning. Your comments to others should be
          constructive and free from harassing statements. You are encourage to
          disagree with other students and the instructor, but such
          disagreements need to respectful and be based upon facts and
          documenttation (rather than prejudices and personalities) Part of the
          learning process in this course is respectful engagement of ideas with
          others.
        </p>
        <p>
          Attendance is expected. Sometimes you cannot avoid missing a class. If
          you need to be away from class, it is your responsibility to catch up
          on the materials discussed in the class.
        </p>
      </div>
      <BackToTop />
    </div>
  );
}
