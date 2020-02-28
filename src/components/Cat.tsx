import * as React from "react";
import styled from "styled-components";
import { useState } from "react";

import { store } from "store";
import { likeCat, disLikeCat } from "lib/utils";

import disLikeIcon from "static/dislike.png";
import likeIcon from "static/like.png";

interface ICatProps {
  cat: CatType;
  index: number;
}

const CatWrapper = styled("div")<{ index: number }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  display: inline-block;
  z-index: ${props => props.index + 1000};
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

const Image = styled("div")<{ img?: string; swipeTo: SwipeTo }>`
  border-radius: 8px;
  background: ${props => `url(${props.img}) ${props.theme.colors.dark}`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 3px 14px ${props => props.theme.colors.light};
  height: 100%;
  min-height: 550px;
  display: block;
  flex-grow: 1;
  transition: all 200ms ease-out;
  opacity: 1;
  margin: 0 auto;
  ${props =>
    props.swipeTo === "left" &&
    `
    transform: translateX(-30rem) rotate(-30deg) !important;
    opacity: 0;
  `};
  ${props =>
    props.swipeTo === "right" &&
    `
      transform: translateX(30rem) rotate(30deg) !important;
      opacity: 0;
  `};
`;

const Actions = styled("div")`
  background: transparent;
  padding: 1em 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
`;

const Button = styled("button")<{ glow: string }>`
  background: #fff;
  justify-content: space-around;
  border: none;
  box-shadow: 3px 3px 14px ${props => props.theme.colors.light};
  outline: none;
  border-radius: 50%;
  padding: 1.2rem;
  text-align: center;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  margin: 0 1em;
  :hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 14px ${props => props.glow};
  }
  > img {
    width: 20px;
    vertical-align: middle;
    line-height: 1;
  }
`;

const Cat: React.FC<ICatProps> = ({ cat, index }) => {
  const [swipeTo, setSwipeTo] = useState<SwipeTo | null>(null);
  return (
    <CatWrapper index={index}>
      <Image swipeTo={swipeTo} img={cat?.url} />
      <Actions>
        <Button
          title="Nope"
          glow="#FEB2B2"
          onClick={() => {
            setSwipeTo("left");
            setTimeout(() => {
              disLikeCat(cat);
              store.catsStore.remove(cat!.id);
              setSwipeTo(null);
            }, 200);
          }}
        >
          <img src={disLikeIcon} alt="Nope" />
        </Button>
        <Button
          title="Like"
          glow="#d6bcfa"
          onClick={() => {
            setSwipeTo("right");
            setTimeout(() => {
              likeCat(cat);
              store.catsStore.remove(cat!.id);
              setSwipeTo(null);
            }, 200);
          }}
        >
          <img src={likeIcon} alt="Like" />
        </Button>
      </Actions>
    </CatWrapper>
  );
};

export default Cat;
