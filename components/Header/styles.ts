import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

export const Container = styled.div`

  background: var(--header);
  padding: 14px 0;

`;

export const Margin = styled.div`

  display: flex;
  margin: 0 auto;
  max-width: 1280px;

`

export const GithubLogo = styled(FaGithub)`

fill: var(--logo);
width: 33px;
height: 33px;
flex-shrink: 0;


`;

export const SearchForm = styled.form`
padding-left: 16px;
width: 100%;

input {
  background-color: var(--search);
  min-height: 28px;
  outline: none;
  border-radius: 6px;
  padding: 0 12px;
  width: 150px;

 &:focus {
   width: 320px;
 }

 transition: width .2s ease-out, color .2s ease-out;

}

`;
