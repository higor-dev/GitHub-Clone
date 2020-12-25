import React, { InputHTMLAttributes } from "react";

import { Container, Flex, Avatar, Row, PeopleIcon, Column, LocationIcon, EmailIcon } from "./styles";

interface InputProps {
  data: any;
}

const Profile: React.FC<InputProps> = ({ data }) => {
  console.log(data);
  return (
    <Container>
      <Flex>

        <div>
          <h1>{data.viewer.name}</h1>
          <h2>{data.viewer.login}</h2>
        </div>
      </Flex>

      <Row>
        <li>
          <PeopleIcon />
          <b>{data.viewer.followers.totalCount}</b>
          <span>followers</span>
          <span>-</span>
        </li>
        <li>
          <b>{data.viewer.following.totalCount}</b>
          <span>following</span>
        </li>
      </Row>
      <Column>
        {data.viewer.location && (
          <li>
            <LocationIcon />
            <span>{data.viewer.location}</span>
          </li>
        )}
        {data.viewer.location && (
          <li>
            <EmailIcon />
            <span>{data.viewer.email}</span>
          </li>
        )}
      </Column>
    </Container>
  );
};

export default Profile;
