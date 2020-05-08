import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps, Link } from '@reach/router';
import PageTemplate from '../../templates/PageTemplate';
import Card from '../atoms/Card';
import Category from '../molecules/Category';
import useBacklog from '../../hooks/useBacklog';
import { Backlog as BacklogTypes } from '../../types';
import { types } from '../../state/enums';
import { backlogsInfo } from '../../data';

const StyledLink = styled(Link)`
  :focus {
    div {
      border: 2px solid ${({ theme }) => theme.typeCardSecondary};
    }
  }
`;

type Props = RouteComponentProps;

const Backlog: React.FC<Props> = () => {
  const backlog = useBacklog();
  const { PROJECT_KEY } = types;
  const projectKey = localStorage.getItem(PROJECT_KEY);

  const cardFuncCreator = (cardType: string) => {
    if (backlog) {
      return backlog
        .filter((doc: BacklogTypes) => doc.type === cardType)
        .map(({ type, content, id, user: { name, photoURL } }: BacklogTypes) => (
          <StyledLink key={id} to={`/project/${projectKey}/backlog/${id}`}>
            <Card photoURL={photoURL} heading={name} content={content} type={type} />
          </StyledLink>
        ));
    }
    return null;
  };

  return (
    <PageTemplate pageHeading="Backlog">
      {backlogsInfo.map(({ type, heading }) => (
        <Category key={type} type={type} heading={heading}>
          {cardFuncCreator(heading)}
        </Category>
      ))}
    </PageTemplate>
  );
};

export default Backlog;
