import React, { Component } from 'react';
import interviewData from './interviewData';

class InterviewShow extends Component {

  render(){
    const interviewId = Number(this.props.match.params.id);
    const list = interviewData;
    const interview = list.find((interview) => interview.id == interviewId)
  return(
    <div className="interview-show">
      <h1 className="heading">{interview.name}</h1>
      <p>{interview.introduction1}</p>
      <p>{interview.introduction2}</p>
      <img src={interview.image} className="interview-image" />
      <p className="question">{interview.question1a}</p>
      <p className="question">{interview.question1b}</p>
      <p className="answer">{interview.answer1b}</p>
      <p className="question">{interview.question1c}</p>
      <p className="answer">{interview.answer1c}</p>
      <p className="question">{interview.question1d}</p>
      <p className="answer">{interview.answer1d}</p>
      <p className="question">{interview.question1e}</p>
      <p className="answer">{interview.answer1e}</p>
      <p className="question">{interview.question1f}</p>
      <p className="answer">{interview.answer1f}</p>
      <p className="question">{interview.question2a}</p>
      <p className="question">{interview.question2b}</p>
      <p className="answer">{interview.answer2b}</p>
      <p className="question">{interview.question2c}</p>
      <p className="answer">{interview.answer2c}</p>
      <p className="question">{interview.question3a}</p>
      <p className="answer">{interview.answer3a}</p>
      <p className="question">{interview.question4a}</p>
      <p className="answer">{interview.answer4a}</p>
      <p className="question">{interview.question5a}</p>
      <p className="answer">{interview.answer5a}</p>
      <p className="question">{interview.question6a}</p>
      <p className="answer">{interview.answer6a}</p>
      <p className="question">{interview.question7a}</p>
      <p className="answer">{interview.answer7a}</p>
      <p className="question">{interview.question8a}</p>
      <p className="answer">{interview.answer8a}</p>
      <p className="question">{interview.question9a}</p>
      <p className="question">{interview.question9b}</p>
      <p className="answer">{interview.answer9b}</p>
      <p className="question">{interview.question9c}</p>
      <p className="answer">{interview.answer9c}</p>
      <p className="question">{interview.question9d}</p>
      <p className="answer">{interview.answer9d}</p>
      <p className="question">{interview.question9e}</p>
      <p className="answer">{interview.answer9e}</p>
      <p className="question">{interview.question9f}</p>
      <p className="answer">{interview.answer9f}</p>
      <p className="question">{interview.question9g}</p>
      <p className="answer">{interview.answer9g}</p>
      <p className="question">{interview.question10a}</p>
      <p className="answer">{interview.answer10a}</p>
    </div>
    )
  }

}

export default InterviewShow;
