import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { rhythm } from '../utils/typography';
import { Header } from '../components/organisms/header/header';
import firebase from 'gatsby-plugin-firebase';

const App = styled.div`
  min-height: 100vh;
  color: var(--textNormal);
  background: var(--bg);
  transition: color 0.2s ease-out, background 0.2s ease-out;
`;

const Container = styled.div`
  max-width: ${rhythm(24)};
  margin-left: auto;
  margin-right: auto;
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`;

type LayoutProps = {
  location: {};
  title: string;
};

const Layout: React.FC<LayoutProps> = ({ children, location, title }) => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    firebase.analytics();
    firebase.performance();
    setTheme(window.__theme);
    window.__onThemeChange = () => {
      setTheme(window.__theme);
    };
  });

  return (
    <App>
      <Container>
        <Header location={location} title={title} theme={theme}></Header>
        {children}
      </Container>
    </App>
  );
};

export default Layout;
