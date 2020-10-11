import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const List = styled.ul`
  margin: 0;
  list-style: none;
`;

const ListItem = styled.li`
  display: inline;
  margin-right: 1.5rem;
`;

const NavigationLink = styled(Link)`
  font-family: Montserrat, sans-serif;
  font-size: 1rem;
  font-weight: 900;
  box-shadow: none;
`;

export const Navigation: React.FC = () => {
  return (
    <List>
      <ListItem>
        <NavigationLink to="/">Home</NavigationLink>
      </ListItem>
      <ListItem>
        <NavigationLink to="/blog">Blog <sup>RU</sup></NavigationLink>
      </ListItem>
    </List>
  );
};
