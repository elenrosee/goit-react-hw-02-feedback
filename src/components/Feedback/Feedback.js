import React from "react";
import PropTypes from "prop-types";

import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

class Feedback extends React.Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handelIncrement = (e) => {
    this.setState((prevState) => {
      if (e.target.id === "good") {
        return { good: prevState.good + 1 };
      } else if (e.target.id === "nautral") {
        return { neutral: prevState.neutral + 1 };
      } else if (e.target.id === "bad") {
        return { bad: prevState.bad + 1 };
      }
    });
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((sum, current) => sum + current, 0);

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100, 2);

  render() {
    return (
      <React.Fragment>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.handelIncrement} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </React.Fragment>
    );
  }
}

export default Feedback;
