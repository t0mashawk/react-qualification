import React from 'react'
import * as Styled from './GitHubRepos.styles';

interface PageProps {
  children: React.ReactNode;
}

function GitHubRepos(props: PageProps): JSX.Element {
  const { children } = props;

  return <Styled.Container>{children}</Styled.Container>;
}

export default GitHubRepos
