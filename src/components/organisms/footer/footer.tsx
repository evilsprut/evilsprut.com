import React from 'react';
import styled from 'styled-components';

import { rhythm } from '../../../utils/typography';

const Container = styled.footer``;

const Right = styled.div`
  float: right;
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Link = styled.a`
  margin-right: 10px;
  font-family: Montserrat, sans-serif;
  font-size: ${rhythm(1 / 2)};

  &:last-child {
    margin-right: 0;
  }
`;

export const Footer: React.FC = () => {
  return (
    <Container>
      <Right>
        <Link href="/rss.xml" target="_blank" rel="noopener noreferrer">
          rss
        </Link>
      </Right>
      <SocialLinks>
        <Link
          href="https://github.com/evilsprut"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </Link>
        <Link
          href="https://t.me/evilsprut"
          target="_blank"
          rel="noopener noreferrer"
        >
          telegram
        </Link>
        <Link
          href="https://twitter.com/evilsprut"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </Link>
      </SocialLinks>
    </Container>
  );
};

export default Footer;
