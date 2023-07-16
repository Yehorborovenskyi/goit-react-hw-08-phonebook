import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: black;
  &:hover {
    color: teal;
  }

  &.active {
    color: white;
    text-shadow: teal 2px 4px 3px, teal 6px 8px 30px, teal 1px 3px 30px;
    font-weight: 900;
  }
`;
