import React from 'react';

import { Container, GithubLogo, SearchForm, Margin } from './styles'

const Header: React.FC = () => {
  return <Container>
    <Margin>
      <GithubLogo />
      <SearchForm>
        <input placeholder="Username or repo..."/>
      </SearchForm>
    </Margin>
  </Container>;
}

export default Header;

