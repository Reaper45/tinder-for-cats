import styled from "styled-components";
import * as React from "react";
import { useObserver } from "mobx-react-lite";

import { store } from "store";

const LikesWrapper = styled("div")`
  width: 100%;
  padding: 0 1em;
  box-sizing: border-box;
  > b {
    color: ${props => props.theme.colors.dark};
    display: block;
    ::after {
      content: "";
      display: block;
      height: 3px;
      width: 60px;
      margin-top: 3px;
      background: ${props => props.theme.colors.secondary};
      opacity: .33;
    }
  }
`;

const Like = styled("div")<{ url: string }>`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 1rem;
  > div:first-of-type {
    width: 50px;
    height: 50px;
    display: block;
    background: url(${props => props.url}) #fff;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-right: 1em;
    border-radius: 5px;
  }
  > div:last-of-type {
    flex-grow: 1;
    b {
      color: ${props => props.theme.colors.dark};
      display: block;
    }
  }
`;

const Likes: React.FC = () => {
  return useObserver(() => (
    <LikesWrapper>
      <b>Recent Likes</b>
      <br />
      {store.catsStore.likes.map(likedCat => (
        <Like key={likedCat.id} url={likedCat.url}>
          <div title="Cat" />
          <div>
            <b>Cats Name Missing</b>
          </div>
        </Like>
      ))}
    </LikesWrapper>
  ));
};

export default Likes;
