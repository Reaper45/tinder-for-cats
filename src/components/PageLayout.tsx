import * as React from 'react';
import styled from "styled-components";

const AppWrapper = styled("div")`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  max-width: 1440px;
  margin: 0 auto;
`;

const MainWrapper = styled("main")`
  height: 100%;
  width: 100%;
  padding: 0 1em;
  flex-grow: 1;
  background: #f5f5f5;
`;

const NavWrapper = styled("nav")`
  width: 25%;
  max-width: 420px;
  min-width: 300px;
  height: 100%;
  box-shadow: 3px 0 6px rgba(0, 0, 0, .14);
  display: block;
`;

const AppLayout: React.FC<{
  render: <T>(props: T) => JSX.Element;
}> = ({ render, ...rest }) => {
  return (
    <AppWrapper>
      <NavWrapper>Menu</NavWrapper>
      <MainWrapper>{render(rest)}</MainWrapper>
    </AppWrapper>
  );
};

export default AppLayout;
