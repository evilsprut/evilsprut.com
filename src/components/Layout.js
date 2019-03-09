import React from 'react';
import styled from 'styled-components';
import { Link as gatsbyLink } from 'gatsby';
import Toggle from './Toggle';

import { rhythm, scale } from '../utils/typography';
import sun from '../assets/sun.png';
import moon from '../assets/moon.png';

const rootPath = `${__PATH_PREFIX__}/`;
const isHomePage = location.pathname === rootPath;
const topPadding = isHomePage ? rhythm(1.5) : '50px';

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
  padding: ${topPadding} ${rhythm(3 / 4)};
`;

const Header = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

const HeaderTitle = styled.h1`
  ${scale(0.75)}
  margin-bottom: ${rhythm(1.5)};
  margin-top: 0;
`;

const HeaderTitleInternal = styled.h3`
  font-family: Montserrat, sans-serif;
  margin-top: 0;
  margin-bottom: ${rhythm(-1)};
  min-height: 3.5rem;
`;

const HeaderLink = styled(gatsbyLink)`
  color: var(--textTitle);
  text-decoration: none;
  box-shadow: none;
`;

const HeaderLinkInternal = styled(gatsbyLink)`
  color: rgb(255, 167, 196);
  text-decoration: none;
  box-shadow: none;
`;

const ThemeToggleImg = styled.img`
  width: 16px;
  height: 16px;
  pointer-events: none;
`;

class Layout extends React.Component {
  state = {
    theme: null,
  };
  componentDidMount() {
    this.setState({ theme: window.__theme });
    window.__onThemeChange = () => {
      this.setState({ theme: window.__theme });
    };
  }
  renderHeader() {
    const { location, title } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;

    if (location.pathname === rootPath) {
      return (
        <HeaderTitle>
          <HeaderLink to={'/'}>{title}</HeaderLink>
        </HeaderTitle>
      );
    } else {
      return (
        <HeaderTitleInternal>
          <HeaderLinkInternal to={'/'}>{title}</HeaderLinkInternal>
        </HeaderTitleInternal>
      );
    }
  }
  render() {
    const { children, location } = this.props;
    return (
      <App>
        <Container>
          <Header>
            {this.renderHeader()}
            {this.state.theme !== null ? (
              <Toggle
                icons={{
                  checked: <ThemeToggleImg src={moon} role="presentation" />,
                  unchecked: <ThemeToggleImg src={sun} role="presentation" />,
                }}
                checked={this.state.theme === 'dark'}
                onChange={e =>
                  window.__setPreferredTheme(
                    e.target.checked ? 'dark' : 'light'
                  )
                }
              />
            ) : (
              <div style={{ height: '24px' }} />
            )}
          </Header>
          {children}
        </Container>
      </App>
    );
  }
}

export default Layout;
