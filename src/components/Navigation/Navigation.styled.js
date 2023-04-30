import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  :last-child {
    margin-left: 20px;
  }
  // :first-child {
  //   margin-left: 50px;
  // }
  &.active {
    color: white;
    background-color: #4b2a99;
  }
`;
