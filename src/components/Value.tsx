import React from "react";

interface IProps {
  value: number;
  type: string;
}

const Value: React.FC<IProps> = ({ value, type }) => {
  console.log(`rendering ${type}`);
  return <p>{value}</p>;
};

export default React.memo(Value);
