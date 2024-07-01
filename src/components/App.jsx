import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
};

// Reviews from all categories

countTotalFeedback = () => {
  const { good, neutral, bad } = this.state;
  return good + neutral + bad;
};

// Percentage of positive reviews

countPositiveFeedbackPercentage = () => {
  const { good } = this.state;
  const total = this.countTotalFeedback();

  // positive percentage
  return total > 0 ? Math.round((good / total) * 100) : 0;
};

// Update state 
handleClick = type => {
  this.setState(prevState => ({
    ...prevState,
    [type]: prevState[type] + 1,
  }));
};

render() {
  const { good, neutral, bad } = this.state;
  const total = this.countTotalFeedback();
  const positivePercentage = this.countPositiveFeedbackPercentage();
  const options = ['good', 'neutral', 'bad'];

  return (
    <div>
      <section title="Please leave a feedback">
        
      </section>
    </div>
  )
}
