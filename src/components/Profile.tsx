import * as React from "react";
import styled from "styled-components";
import { store } from "store";

const ProfileWrapper = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  background: ${props => props.theme.colors.dark};
  > div:last-of-type {
    flex-grow: 1;
    b {
      color: ${props => props.theme.colors.light};
      display: block;
    }
    small {
      color: ${props => props.theme.colors.light};
      opacity: .66;
    }
  }
`;

const Avatar = styled("nav")<{ avatar?: string }>`
  border: solid 2px ${props => props.theme.colors.light};
  width: 40px;
  height: 40px;
  display: block;
  background: url(${props => props.avatar}) ${props => props.theme.colors.primary};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 1em;
  border-radius: 5px;
`;

const Profile: React.FC = () => {
  return (
    <ProfileWrapper>
      <Avatar avatar={store.party!.avatar} />
      <div>
        <b>{store.party.name}</b>
        <small>{store.party.title}</small>
      </div>
    </ProfileWrapper>
  );
};

export default Profile;
