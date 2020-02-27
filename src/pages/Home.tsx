import * as React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

import { makeGetRequest } from "lib/utils";
import Cat from "components/Cat";

const HomeWrapper = styled("div")`
  height: 100%;
  width: 100%;
`;

const CatsContainer = styled("div")`
  width: 40%;
  height: 100%;
  margin: 0 auto;
  padding: 3em 0;
  box-sizing: border-box;
  display: block;
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
    <HomeWrapper>
      <CatsContainer>
        <Cat />
      </CatsContainer>
    </HomeWrapper>
  );
};

export default Home;
