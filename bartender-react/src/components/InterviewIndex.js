import React, { Component } from 'react';
import interviewData from './interviewData';
import { Link } from 'react-router-dom';

class InterviewIndex extends Component {

  renderInterviews(){
    return interviewData.map((interview, index) => {
      return(
        <li key={index}>
          <img src={interview.smallimage}
               alt="small"
               className="index-image" />
          <Link to={`/interviews/${interview.id}`} className="interview-links">
            {interview.title}
          </Link>
        </li>
        )
    })
  }

  render(){
    return(
      <div className="interview-div">
      <h1 className="heading">Bartender Showcase</h1>
        <ul className="interview-list">

          {this.renderInterviews()}
        </ul>
      </div>
      )

  }

}

export default InterviewIndex;
