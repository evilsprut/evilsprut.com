import React from 'react';
import styled from 'styled-components';

import { rhythm } from '../utils/typography';

const Container = styled.footer`
  margin-top: ${rhythm(2.5)};
  padding-top: ${rhythm(1)};
`;

const Right = styled.div`
  float: right;
`;

class Footer extends React.Component {
  render() {
    return (
      <Container>
        <Right>
          <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
            rss
          </a>
        </Right>
        <a
          href="https://github.com/bukhalo"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>{' '}
        &bull;{' '}
        <a
          href="https://t.me/bukhalo"
          target="_blank"
          rel="noopener noreferrer"
        >
          telegram
        </a>
      </Container>
    );
  }
}

export default Footer;
