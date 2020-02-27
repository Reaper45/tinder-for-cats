import * as React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

import { makeGetRequest } from "lib/utils";
import Cat from "components/Cat";

const CatsContainer = styled("div")`
  width: 100%;
  min-width: 480px;
  height: 100%;
  margin: 0 auto;
  padding: 75px 0 3em;
  box-sizing: border-box;
  display: block;
  @media (min-width: 1280px) {
    width: 40%;
    min-width: 400px;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    width: 60%;
    min-width: 390px;
  }
  @media (max-width: 1024px) and (min-width: 768px) {
    width: 70%;
    min-width: 390px;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    width: 80%;
    min-width: 380px;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    min-width: 300px;
  }
`;

interface IHomeState {
  cats: CatType[] | any[];
}

const Home: React.FC = () => {
  const [cats, setCats] = useState<CatType[]>([]);
  useEffect(() => {
    const getCats = async () => {
      const response = await makeGetRequest();
      const cats = await response.json();
      setCats(cats);
    }
    getCats();
  });
  console.log(cats)
  return (
    <CatsContainer>
      <Cat />
    </CatsContainer>
  );
};

export default Home;
