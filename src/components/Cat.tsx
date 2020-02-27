import * as React from "react";
import styled from "styled-components";

import likeIcon from "static/like.png";
import disLikeIcon from "static/dislike.png";

interface ICatProps {
  cat?: CatType
}

const CatWrapper = styled("div")`
  box-shadow: 0 3px 14px ${props => props.theme.colors.light};
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column
`;

const Image = styled("div")<{ img?: string }>`
  border-radius: 8px;
  background: ${props => `url(${props.img}) ${props.theme.colors.dark}`};
  height: 100%;
  width: 100%;
  display: block;
  flex-grow: 1;
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

const Button = styled("button")`
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
    box-shadow: 0px 0px 14px ${props => props.theme.colors.light};
  }
  > img {
    width: 20px;
    vertical-align: middle;
    line-height: 1;
  }
`;

const Cat: React.FC<ICatProps> = ({ cat }) => {
  return (
    <CatWrapper>
      <Image />
      <Actions>
        <Button title="Nope">
          <img src={disLikeIcon} alt="Nope" />
        </Button>
        <Button title="Like">
          <img src={likeIcon} alt="Like" />
        </Button>
      </Actions>
    </CatWrapper>
  );
};

export default Cat;
