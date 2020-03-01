import React from 'react';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import { Footer } from '../../components/organisms/footer/footer';
import { formatPostDate, formatReadingTime } from '../../utils/helpers';
import { rhythm } from '../../utils/typography';
import { loadFontsForCode } from '../../utils/i18n';

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

const FooterContainer = styled.div`
  margin-top: ${rhythm(2.0)};
  padding-top: ${rhythm(1)};
`;

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    );
    const posts = get(this, 'props.data.allMarkdownRemark.edges').filter(
      ({ node }) => node.fields.langKey === 'ru'
    );
    loadFontsForCode('ru');

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO />
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug;
          return (
            <div key={node.fields.slug}>
              <Title>
                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  {title}
                </Link>
              </Title>
              <small>{formatReadingTime(node.timeToRead)}</small>
              <p
                dangerouslySetInnerHTML={{ __html: node.frontmatter.spoiler }}
              />
              <PostFooter>
                <Date>{formatPostDate(node.frontmatter.date, 'ru')}</Date>
                <Tags>
                  {node.frontmatter.tags.map(tag => {
                    return <Tag key={tag}>{tag}</Tag>;
                  })}
                </Tags>
              </PostFooter>
            </div>
          );
        })}
        <FooterContainer>
          <Footer></Footer>
        </FooterContainer>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
            langKey
          }
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            spoiler
            tags
          }
        }
      }
    }
  }
`;
