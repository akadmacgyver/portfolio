import * as React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        author: string;
        description: string;
        keywords: string;
      };
    };
  };
}

export default class extends React.Component<IndexPageProps, {}> {
  constructor(props: IndexPageProps, context: any) {
    super(props, context);
  }
  public render() {
    return (
      <div>
        <Helmet>
          <html lang="pl" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content={this.props.data.site.siteMetadata.description}
          />
          <meta
            name="keywords"
            content={this.props.data.site.siteMetadata.keywords}
          />
          <meta
            name="author"
            content={this.props.data.site.siteMetadata.author}
          />
          <title>{this.props.data.site.siteMetadata.title}</title>
          {/* <link rel="icon" href={favicon} /> */}
        </Helmet>
      </div>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        author
        description
        keywords
      }
    }
  }
`;
