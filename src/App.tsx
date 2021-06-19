import React from 'react';
import ResumeBuilder from './resume-builder/resumeBuilder';
import { initiateTooltip } from './resume-builder/tooltip/tippy';
import './resume-builder/assets/stylesheets/app.scss';
import './resume-builder/resumeBuilder.css';

class App extends React.Component {
  componentDidMount() {
    initiateTooltip();
  }
  render() {
    return (
      <ResumeBuilder />
    )
  }
}
export default App;
