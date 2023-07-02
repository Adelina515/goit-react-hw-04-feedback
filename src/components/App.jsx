import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';
export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = option => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;

      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / total) * 100 || 0);
  };

  return (
    <div style={{ padding: 20 }}>
      <Section
        title={'Please leave feedback'}
        good={good}
        neutral={neutral}
        bad={bad}
      >
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleClick}
        />
      </Section>

      <Section title={'Statistics'}>
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
// export class App extends Component {

// handleClick = option => {
//   console.log(option);
//   this.setState(prevState => {
//     return {
//       [option]: prevState[option] + 1,
//     };
//   });
// };

// countTotalFeedback = () => {
//   const { good, neutral, bad } = this.state;
//   return good + neutral + bad;
// };

// countPositiveFeedbackPercentage = () => {
//   const { good } = this.state;
//   const total = this.countTotalFeedback();
//   return Math.round((good / total) * 100 || 0);
// };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
// return (
//   <div style={{ padding: 20 }}>
//     <Section
//       title={'Please leave feedback'}
//       good={good}
//       neutral={neutral}
//       bad={bad}
//     >
//       <FeedbackOptions
//         options={['good', 'neutral', 'bad']}
//         onLeaveFeedback={this.handleClick}
//       />
//     </Section>

//     <Section title={'Statistics'}>
//       {total ? (
//         <Statistics
//           good={good}
//           neutral={neutral}
//           bad={bad}
//           total={this.countTotalFeedback()}
//           positivePercentage={this.countPositiveFeedbackPercentage()}
//         />
//       ) : (
//         <Notification message="There is no feedback" />
//       )}
//     </Section>
//   </div>
// );
//   }
// }
