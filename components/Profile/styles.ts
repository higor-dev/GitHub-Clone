import styled from 'styled-components';
import { RiGroupLine, RiBuilding4Line, RiMapPin2Line, RiMailLine, RiLinksLine } from 'react-icons/ri';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: var(--header);
  padding: 14px 32px
`;

export const Flex = styled.div``;

export const Avatar = styled.img``;

export const Row = styled.div``;



export const PeopleIcon = styled(RiGroupLine)`width: 16px;
height: 16px;
fill: var(--icon);
flex-shrink: 0;`

export const Column = styled.div``;

export const LocationIcon = styled(RiMapPin2Line)`width: 16px;
height: 16px;
fill: var(--icon);
flex-shrink: 0;`

export const EmailIcon= styled(RiMailLine)`width: 16px;
height: 16px;
fill: var(--icon);
flex-shrink: 0;`
