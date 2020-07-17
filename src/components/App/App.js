import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import StudentForm from '../StudentForm/StudentForm';
import StudentList from '../StudentList/StudentList';

class App extends Component {
  state = {
    studentList: [{ name: 'Shelby' }, { name: 'Alex' }, { name: 'Ailea' }],
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
    axios({
      method: 'POST',
      url: '/students',
      data: newStudent,
    })
      .then((response) => {
        this.getStudents();
      })
      .catch((err) => {
        console.log('err:', err);
        alert('Ailea messed up the Post.');
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">GitHub Student List</h1>
        </header>
        <br />
        <StudentForm addStudent={this.addStudent} />

        <StudentList studentList={this.state.studentList} />
      </div>
    );
  }
}

export default App;
