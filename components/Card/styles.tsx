import styled, { css } from 'styled-components';
import { RiBookmarkLine, RiStarLine } from 'react-icons/ri'

export const Container = styled.div`

display: flex;
flex-direction: column;
padding: 16px;
border: 1px solid var(--border);
justify-content: space-between;
border-radius: 6px;
`;

const icons = css`

width: 16px;
height: 16px;
fill: var(--icon);
flex-shrink: 0;

`

export const Topside = styled.div`

> header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;


  > a {
    margin-left: 8px;
    font-size: 14px;
    font-weight: 600;
    color: var(--link);
    text-decoration: none;

    &:focus,
    &:hover {
      text-decoration: underline
    }
  }
}

p {
  margin: 8px 0 16px;
  font-size: 14px;
  color: var(--gray);
  letter-spacing: 0.1px;
}

`


export const RepoIcon = styled(RiBookmarkLine)`${icons}`
export const Botside= styled.div`

> ul {
  display: flex;
  align-items: center;

  > li {
    display: flex;
    align-items: center;
    margin-right: 16px;

    > span {
      margin-left: 5px;
      font-size: 12px;
      color: var(--gray);
    }
  }

  .language {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    flex-shrink: 0;
  }
}

`
export const StarIcon = styled(RiStarLine)`${icons}`
