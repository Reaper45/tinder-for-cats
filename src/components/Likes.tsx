import styled from "styled-components";
import * as React from "react";

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

const Like = styled("div")`
  width: 100%;
  height: 80px;
  padding: 0 1rem;
  background: #f5f5f5;
  border-radius: 5px;
  display: block;
  box-sizing: border-box;
  margin-bottom: 1rem;
`;

const Likes: React.FC = () => {
  return (
    <LikesWrapper>
      <b>Recent Likes</b>
      <br />
      <Like />
      <Like />
      <Like />
      <Like />
    </LikesWrapper>
  );
};

export default Likes;
