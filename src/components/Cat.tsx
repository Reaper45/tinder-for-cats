import * as React from "react";

export interface ICat {}

interface ICatProps {
  cat: ICat
}

const Cat: React.FC<ICatProps> = ({ cat }) => {
  return <div></div>;
};

export default Cat;
