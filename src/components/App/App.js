import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import StudentForm from '../StudentForm/StudentForm';

class App extends Component {
  state = {
    studentList: [],
  };

  getStudents() {
    axios({
      method: 'GET',
      url: '/students',
    })
      .then((response) => {
        //something goes here
      })
      .catch((err) => {
        alert('Wuh-oahhh, you messed up!', err);
      });
  }

  // This function is called by the StudentForm when the submit button is pressed
  addStudent = (newStudent) => {
    console.log(newStudent);
    // POST your data here
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">GitHub Student List</h1>
        </header>
        <br />
        <StudentForm addStudent={this.addStudent} />

        <StudentList studentList={this.studentList} />
      </div>
    );
  }
}

export default App;
