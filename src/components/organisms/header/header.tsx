import React from 'react';
import styled from 'styled-components';
import { Link as gatsbyLink } from 'gatsby';
import { rhythm, scale } from '../../../utils/typography';
import ThemeToggle from '../../atoms/theme-toggle/theme-toggle';
import { ThemeToggleIcon } from '../../atoms/theme-toggle-icon/theme-toggle-icon';
import sun from '../../../assets/sun.png';
import moon from '../../../assets/moon.png';
import { Navigation } from '../navigation/navigation';

const HeaderContainer = styled.div`
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

const Right = styled.div`
  display: flex;
  align-items: center;
  flex-direction: flex-end;
`;

type HeaderProps = {
  location: {};
  title: string;
  theme: any;
};

export const Header: React.FC<HeaderProps> = ({ location, title, theme }) => {
  const renderHeader = () => {
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
  };

  return (
    <HeaderContainer>
      {renderHeader()}
      <Right>
        <Navigation></Navigation>
        {theme !== null ? (
          <ThemeToggle
            icons={{
              checked: <ThemeToggleIcon src={moon} role="presentation" />,
              unchecked: <ThemeToggleIcon src={sun} role="presentation" />,
            }}
            checked={theme === 'dark'}
            onChange={e =>
              window.__setPreferredTheme(e.target.checked ? 'dark' : 'light')
            }
          />
        ) : (
          <div style={{ height: '24px' }} />
        )}
      </Right>
    </HeaderContainer>
  );
};
