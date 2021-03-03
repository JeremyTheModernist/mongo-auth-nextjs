import React from 'react';
import styled from 'styled-components';

const StatusStyles = styled.div`
  display: flex;
  flex-flow: row nowrap;
  max-width: 100%;
  color: var(--white);
  background-color: ${(props) =>
    props.status === 'success' ? 'green' : 'var(--red-error)'};
  border-radius: var(--border-normal);
  padding: var(--padding-small);
  margin-bottom: var(--padding-normal);
`;

const Status = ({ children, status = 'failure' }) => {
  return <StatusStyles status={status}>{children}</StatusStyles>;
};

export default Status;
