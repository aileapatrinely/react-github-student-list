import React, { Component } from 'react';

class StudentList extends Component {
  render() {
    const studentData = this.props.studentList.map((student, index) => {
      return (
        <tr key={index}>
          <td>{student.github_name}</td>
        </tr>
      );
    });

    return (
      <div>
        <h2>Student List</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>{studentData}</tbody>
        </table>
      </div>
    );
  }
}

export default StudentList;
