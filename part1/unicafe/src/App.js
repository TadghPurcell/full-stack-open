import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const StatisticsLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ good, neutral, bad, total }) => {
  const setAverage = () => (total === 0 ? 0 : good / total - bad / total);
  const setPositive = () =>
    total === 0 ? 0 : ((good / total) * 100).toFixed(1);
  if (total === 0) return;
  return (
    <table>
      <tbody>
        <StatisticsLine text="good" value={good} />
        <StatisticsLine text="neutral" value={neutral} />
        <StatisticsLine text="bad" value={bad} />
        <StatisticsLine text="all" value={total} />
        <StatisticsLine text="average" value={setAverage()} />
        <StatisticsLine text="positive" value={setPositive()} />
      </tbody>
    </table>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const handleGood = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
    setTotal(updatedGood + bad + neutral);
  };
  const handleNeutral = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    setTotal(good + bad + updatedNeutral);
  };
  const handleBad = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
    setTotal(good + updatedBad + neutral);
  };

  const setStatistic = () => (total === 0 ? <p>No feedback given</p> : "");

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleClick={handleGood} />
      <Button text="neutral" handleClick={handleNeutral} />
      <Button text="bad" handleClick={handleBad} />
      <h1>statistics</h1>
      {setStatistic()}
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  );
};

export default App;
