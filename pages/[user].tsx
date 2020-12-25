import React from "react";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { AppProps } from "next/app";
import { Container, Main, Left, Right } from "../styles/UserStyles/styles";
import Profile from '../components/Profile';
import { USER_LIST } from './api/apolloClient/user/user';
import { client } from "./api/apolloClient";
import Header from "../components/Header";

const User: React.FC<AppProps> = (props: AppProps) => {

  const router: NextRouter = useRouter();
  const { user } = router.query;


  return (
    <>
      <Header/>
      <Container>
        <Main>
          <Left>
            <Profile data={props} />
          </Left>
          <Right></Right>
        </Main>
      </Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {

  const { data } = await client.query({
    query: USER_LIST
  })

  return {
    props: data
  };
};

export default User;
