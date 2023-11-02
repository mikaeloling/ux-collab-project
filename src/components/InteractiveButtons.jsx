import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
`;

const Icon = styled.img`
  height: 24px;
  width: 24px;
`;

const InteractiveButtons = ({ prop, search }) => {
  return (
    <Button>
      <Icon src={search} alt={prop} />
    </Button>
  );
};

export default InteractiveButtons;