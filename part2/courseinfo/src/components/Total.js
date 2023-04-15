const Total = ({ parts }) => {
  const total = parts
    .map((part) => part.exercises)
    .reduce((acc, cur) => (acc += cur), 0);

  return <h3>Total number of exercises {total}</h3>;
};

export default Total;
