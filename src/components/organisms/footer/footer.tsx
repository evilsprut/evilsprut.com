import React from 'react';
import styled from 'styled-components';

import { rhythm } from '../../../utils/typography';

const Container = styled.footer`
  margin-top: ${rhythm(2.5)};
  padding-top: ${rhythm(1)};
`;

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

  &:last-child {
    margin-right: 0;
  }
`;

export const Footer: React.FC = () => {
  return (
    <Container>
      <Right>
        <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
          rss
        </a>
      </Right>
      <SocialLinks>
        <Link
          href="https://vk.com/bukhalo_a"
          target="_blank"
          rel="noopener noreferrer"
        >
          vk
        </Link>
        <Link
          href="https://facebook.com/bukhalo.a"
          target="_blank"
          rel="noopener noreferrer"
        >
          facebook
        </Link>
        <Link
          href="https://instagram.com/bukhalo_a"
          target="_blank"
          rel="noopener noreferrer"
        >
          instagram
        </Link>
        <Link
          href="https://twitter.com/bukhalo_a"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </Link>
        <Link
          href="https://t.me/bukhalo"
          target="_blank"
          rel="noopener noreferrer"
        >
          telegram
        </Link>
        <Link
          href="https://github.com/bukhalo"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </Link>
      </SocialLinks>
    </Container>
  );
};

export default Footer;
