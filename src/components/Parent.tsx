import React, { useState } from "react";
import Button from "./Button";
import ClassBasedComponent from "./ClassBasedComponent";
import Title from "./Title";
import Value from "./Value";

const Parent = () => {
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(10000);

  const increaseAge = () => {
    setAge((prev) => prev + 1);
  };
  const increaseSalary = () => {
    setSalary((prev) => prev + 1000);
  };

  return (
    <div>
      {/* <ClassBasedComponent /> */}
      <Title />
      {/* <Title />
      <Value value={age} type="age" />
      <Button handleClick={increaseAge} type="age button" />
      <Value value={salary} type="salary" />
      <Button handleClick={increaseSalary} type="salary button" /> */}
    </div>
  );
};

export default Parent;
