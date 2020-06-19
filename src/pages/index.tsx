import React from 'react';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';

import Bio from '../components/organisms/bio/bio';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Footer from '../components/organisms/footer/footer';
import { formatPostDate, formatReadingTime } from '../utils/helpers';
import { rhythm } from '../utils/typography';
import { loadFontsForCode } from '../utils/i18n';
import { About } from '../components/organisms/about/about';
import firebase from 'gatsby-plugin-firebase';
firebase.analytics();
firebase.performance();

const PostFooter = styled.div`
  display: flex;
`;

const Title = styled.h3`
  font-family: Montserrat, sans-serif;
  font-size: ${rhythm(1)};
  margin-bottom: ${rhythm(1 / 4)};
`;

const Date = styled.div`
  font-size: 12px;
`;

const Tags = styled.div`
  display: flex;
  align-items: center;
  margin: 0 5px;
`;

const Tag = styled.div`
  margin: 0 5px;
  padding: 0 5px;
  font-size: 12px;
  background-color: var(--tag-bg);
  border-radius: 3px;

  &:first-child {
    margin-left: 0;
  }
`;

const Padder = styled.div`
  margin-bottom: 8rem;
`;

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    );
    loadFontsForCode('ru');

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO />
        <Bio></Bio>
        <Padder>
        <About></About>
        </Padder>
        <Footer />
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
