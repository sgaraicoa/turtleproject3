import React, { Component } from 'react';
import interviewData from './interviewData';
import { Link } from 'react-router-dom';

class InterviewIndex extends Component {

  renderInterviews(){
    return interviewData.map((interview, index) => {
      return(
        <li key={index}>
          <Link to={`/interviews/${interview.id}`} className="interview-links">
            {interview.name}
          </Link>
        </li>
        )
    })
  }

  render(){
    return(
      <div className="interview-div">
        <ul className="interview-list">
          {this.renderInterviews()}
        </ul>
      </div>
      )

  }

}

export default InterviewIndex;
