import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateFeedback = total => {
    this.setState(prevState => ({
      [total]: prevState[total] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return good === 0
      ? 0
      : Math.round((good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();

    return (
      <div>
        <div>
          <h2>Please leave feedback</h2>
          <button type="button" onClick={() => this.updateFeedback('good')}>
            Good
          </button>
          <button type="button" onClick={() => this.updateFeedback('neutral')}>
            Neutral
          </button>
          <button type="button" onClick={() => this.updateFeedback('bad')}>
            Bad
          </button>
        </div>
        <div>
          <h3>Statistics</h3>
          good={good} neutral={neutral} bad={bad}
        </div>
      </div>
    );
  }
}
