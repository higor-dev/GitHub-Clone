import React from "react";
import Link from "next/link";
import { REPOSITORIES } from "../../pages/api/apolloClient/user/user";
import { client } from "../../pages/api/apolloClient";

import { Container, Topside, RepoIcon, Botside, StarIcon } from "./styles";

interface CardProps {
  data: any;
}

const Card: React.FC<CardProps> = (props) => {
  return <Container>
    <Topside>
        <header>
          <RepoIcon/>

          <Link href='/'>{props.data.name}</Link>
          </header>
          <p>{props.data.description}</p>

    </Topside>
    <Botside>
      <ul>
        <li>
            <div className="language" style={{backgroundColor: `${props.data.primaryLanguage.color}`}}/>
            <span>{props.data.primaryLanguage.name}</span>

        </li>
        <li>
          <StarIcon />
          <span>{props.data.stargazers.totalCount}</span>
        </li>
      </ul>
    </Botside>
  </Container>;
};

export default Card;
