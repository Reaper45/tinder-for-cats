import * as React from "react";
import styled from "styled-components";
import { useObserver } from "mobx-react-lite";


import Cat from "components/Cat";
import { store } from "store";

const CatsContainer = styled("div")`
  width: 100%;
  height: 100%;
  padding: 75px 0 3em;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow: hidden;
`;

interface IHomeState {
  cats: CatType[] | any[];
}

const Home: React.FC = () => {
  return useObserver(() => (
    <CatsContainer>
      {store.catsStore.cats.map((cat, key) => cat && (
        <Cat cat={cat} index={key} key={cat!.id} />
      ))}
    </CatsContainer>
  ));
};

export default Home;
