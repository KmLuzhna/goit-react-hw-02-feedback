// import { Section } from "./Section/Section"
// import React, { Component } from "react";
// // import { FeedbackOptions } from "./Feedback/Feedback";
// import { Statistics } from "./Statistics/Statistics";

// // export const App = () => {
// //   return (
// //     <div
// //       style={{
// //         height: '100vh',
// //         display: 'flex',
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //         fontSize: 40,
// //         color: '#010101'
// //       }}
// //     >
// //       <Section title="Please leave feedback">

// //       </Section>
// //       <Section title="Statistics"></Section>

// //     </div>
// //   );
// // };

// // export class App extends Component {
  
// //   state = {
// //   good: 0,
// //   neutral: 0,
// //   bad: 0
// // }

// //   render() {
// //     const { good, neutral, bad} = this.state;
// //     return (
// //       <>
// //         <Section title="Please leave feedback">
// //         <FeedbackOptions
// //           options={Object.keys(this.state)}
// //           />
// //         </Section>
// //         <Section title="Statistics">
// //           <Statistics
// //             good={good}
// //             neutral={neutral}
// //             bad={bad}
// //           />
// //         </Section>
// //       </>

// //     )
// //   }
// // }

// export class App extends Component {
  
//   state = {
//   good: 0,
//   neutral: 0,
//   bad: 0
//   }
  

// onBtnClickGood = () => {
//   this.setState({
//     good: this.state.good + 1,
//        })
//   }
//   onBtnClickNeutral = () => {
//   this.setState({
//     neutral: this.state.neutral + 1,
//        })
//   }
//   onBtnClickBad = () => {
//   this.setState({
//     bad: this.state.bad + 1,
//        })
//     }
//   countTotalFeedback = () => {
//     // return this.state.good + this.state.neutral + this.state.bad;
//     console.log(this.state.good + this.state.neutral + this.state.bad)
//   };



  
//   render() {
//     const { good, neutral, bad} = this.state;
//     return (
//       <>
//         <Section title="Please leave feedback">
//           <button onClick={this.onBtnClickGood}>Good</button>
//           <button onClick={this.onBtnClickNeutral}>Neutral</button>
//           <button onClick={this.onBtnClickBad}>Bad</button>
//         </Section>
//         <Section title="Statistics">
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={this.countTotalFeedback}
            
//           />
//         </Section>
//       </>

//     )
//   }
// }

// ============================================================

import { Component } from 'react';
import {Statistics} from './Statistics/Statistics';
// import FeedbackOptions from './Feedback/Feedback';
import Section from './Section/Section';
import {FeedbackOptions} from './Feedback/Feedback'

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };


  onButtonClick = feedback => {
    if (feedback === 'good') {
      this.setState({ good: this.state.good + 1 });
    }
    if (feedback === 'neutral') {
      this.setState({ neutral: this.state.neutral + 1 });
    }
    if (feedback === 'bad') {
      this.setState({ bad: this.state.bad + 1 });
    }
  };

   countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

    countPositiveFeedbackPercentage = () => {
    return `${Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    )}%`;
  };

  render() {
    const { good, bad, neutral } = this.state;
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onButtonClick}
          />
        </Section>
        <Section title={'Statistics'}>
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <p>There is no feedback</p>
          )}
        </Section>
      </>
    );
  }
}