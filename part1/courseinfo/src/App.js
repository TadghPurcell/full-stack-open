const Header = (prop) => {
  console.log(prop.course.name);
  return <h1>{prop.course.name}</h1>;
};

const Part = ({ part, exercise }) => {
  return (
    <p>
      {part} {exercise}
    </p>
  );
};

const Content = (parts) => {
  return (
    <>
      <Part
        part={parts.parts.parts[0].name}
        exercise={parts.parts.parts[0].exercises}
      />
      <Part
        part={parts.parts.parts[1].name}
        exercise={parts.parts.parts[1].exercises}
      />
      <Part
        part={parts.parts.parts[2].name}
        exercise={parts.parts.parts[2].exercises}
      />
    </>
  );
};

const Total = (parts) => {
  return (
    <p>
      Number of exercises{" "}
      {parts.parts.parts[0].exercises +
        parts.parts.parts[1].exercises +
        parts.parts.parts[2].exercises}
    </p>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={course} />
      <Total parts={course} />
    </div>
  );
};

export default App;
