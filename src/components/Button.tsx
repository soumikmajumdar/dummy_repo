import React from "react";

interface IProps {
  handleClick: () => void;
  type: string;
}

const Button: React.FC<IProps> = ({ handleClick, type }) => {
  console.log(`rendering ${type}`);
  return <button onClick={handleClick}>{type}</button>;
};

export default React.memo(Button);
