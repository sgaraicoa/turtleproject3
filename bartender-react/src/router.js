import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';
import Navigation from './components/Navigation';
// import About from './components/About';
import Guide from './components/Guide';
import Recipes from './components/Recipes';
import InterviewIndex from './components/InterviewIndex';
import InterviewShow from './components/InterviewShow';


export default (
  <BrowserRouter>
      <div className="App">
          <Navigation />
          <Route exact path='/' component={App} />
          <Route path='/recipes' component={Recipes} />
          <Route exact path='/interviews' component={InterviewIndex} />
          <Route path='/interviews/:id' component={InterviewShow} />
          <Route path='/guide' component={Guide} />

      </div>


  </BrowserRouter>

  );
