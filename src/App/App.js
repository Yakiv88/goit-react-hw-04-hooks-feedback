import { useState } from 'react'

import { Children } from 'react'
import s from './App.module.css'
import FeedbackOptions from '../Components/FeedbackOptions/FeedbackOptions'
import Section from '../Components/Section/Section'
import Statistics from '../Components/Statistics/Statistics'

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const onLeaveFeedback = (evt) => {
    switch (evt.target.value) {
      case 'good':
        setGood((prevState) => prevState + 1)
        break
      case 'neutral':
        setNeutral((prevState) => prevState + 1)
        break
      case 'bad':
        setBad((prevState) => prevState + 1)
        break
      default:
        return
    }
  }

  const countTotalFeedback = () => {
    return good + neutral + bad
  }

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback()
    return Math.round((good / total) * 100)
  }

  const options = ['good', 'neutral', 'bad']

  return (
    <div className={s.App}>
      <Section title="Please leave a feedback" children={Children}>
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  )
}

export default App
