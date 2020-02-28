import * as React from "react";
import styled from "styled-components";
import { useState } from "react";
import { RouteComponentProps } from "react-router-dom";

import { store } from "store";

const GetInWrapper = styled("div")`
  width: 100%;
  height: 100%;
  background: ${props => props.theme.colors.dark};
  div {
    width: 100%;
  }
  label {
    display: block;
    margin-bottom: 0.5rem;
    color: ${props => props.theme.colors.light};
    opacity: 0.66;
  }
  > div {
    max-width: 350px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  b {
    color: ${props => props.theme.colors.light};
    display: block;
    margin-bottom: 1em;
    font-size: 1.3em;
  }
  a {
    color: ${props => props.theme.colors.light};
    text-decoration: underline;
    margin-top: 1em;
    display: block;
    text-align: center;
  }
`;

const Input = styled("input")`
  background: #fff;
  border-radius: 4px;
  padding: 1rem;
  font-size: 1em;
  width: 100%;
  border: none;
  margin-bottom: 1rem;
  box-sizing: border-box;
  outline: none;
  ::placeholder {
    opacity: .33;
  }
`;

const SubmitButton = styled("button")`
  background: #2A2552;
  color: ${props => props.theme.colors.light};
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 1.2rem;
  text-align: center;
  cursor: pointer;
  margin-top: 1em;
  width: 100%;
  font-weight: bolder;
`;

const GetIn: React.FC<RouteComponentProps> = ({ history }) => {
  const [values, setValue] = useState<{ name: string; title: string }>({
    name: "Mwashighadi Joram",
    title: "Front End Engineer"
  });
  console.log(values)
  return (
    <GetInWrapper>
      <div>
        <div>
          <div>
            <b>Get In</b>
          </div>
          <label>Full Name</label>
          <Input
            value={values.name}
            onChange={e => setValue({ ...values, name: e.target!.value })}
            name="name"
          />
          <label>Title</label>
          <Input
            value={values.title}
            onChange={e => setValue({ ...values, title: e.target!.value })}
            name="name"
          />
          <SubmitButton
            onClick={() => {
              store.setParty(values);
              history.push("/home");
            }}
          >
            Get in
          </SubmitButton>
          <a href="/home">skip</a>
        </div>
      </div>
    </GetInWrapper>
  );
};

export default GetIn;