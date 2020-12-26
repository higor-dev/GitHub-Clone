import React from "react";
import Link from "next/link";
import { GetServerSideProps } from "next";
import { AppProps } from "next/app";
import { Container, Main, Left, Right, Repos } from "../styles/UserStyles/styles";
import Profile from '../components/Profile';
import { USER_LIST, REPOSITORIES } from './api/apolloClient/user/user';
import { client } from "./api/apolloClient";
import Card from "../components/Card";


const User: React.FC = (props: any) => {


  const { userData, repoData } = props;


  return (
    <>

      <Container>
        <Main>
          <Left>
            <Profile data={userData.data} />
          </Left>
          <Right>
          <h2>Pinned</h2>
            <Repos>
              {repoData.data.viewer.pinnedItems.nodes.map((node: any) =>
                <Card key={node.name} data={node} />
              )}
            </Repos>
          </Right>
        </Main>
      </Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {

  const userData = await client.query({
    query: USER_LIST
  })

  const repoData = await client.query({
    query: REPOSITORIES
  })
  return {
    props: {
      userData: userData,
      repoData: repoData
    }
  };
};

export default User;
