import * as React from "react";

interface ICatProps {
  cat: CatType
}

const Cat: React.FC<ICatProps> = ({ cat }) => {
  return <div></div>;
};

export default Cat;
