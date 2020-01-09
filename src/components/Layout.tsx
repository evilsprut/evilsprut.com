import * as React from 'react';
import styled from 'styled-components';
import { Link as gatsbyLink } from 'gatsby';
import ThemeToggle from './atoms/theme-toggle/theme-toggle';
import { ThemeToggleIcon } from './atoms/theme-toggle-icon/theme-toggle-icon';
import { rhythm, scale } from '../utils/typography';
import sun from '../assets/sun.png';
import moon from '../assets/moon.png';

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

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${rhythm(1.5)};
`;

const HeaderTitle = styled.h1`
  ${scale(0.75)}
  margin-top: 0;
  margin-bottom: 0;
`;

const HeaderTitleInternal = styled.h3`
  display: flex;
  align-items: center;
  height: 42px;
  font-family: Montserrat, sans-serif;
  margin-top: 0;
  margin-bottom: 0;
  min-height: ${rhythm(1.5)};
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

export class Layout extends React.Component {
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
    const { children } = this.props;
    return (
      <App>
        <Container>
          <Header>
            {this.renderHeader()}
            {this.state.theme !== null ? (
              <ThemeToggle
                icons={{
                  checked: <ThemeToggleIcon src={moon} role="presentation" />,
                  unchecked: <ThemeToggleIcon src={sun} role="presentation" />,
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
