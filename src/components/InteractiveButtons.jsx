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
  align-self: stretch;
position: relative;
width: 24px;

&&: background {
background-color: #252d32;
height: 28px;
left: 100px;
position: relative;
width: 28px;
}
`;

const input = styled.input`
  height: 24px;
  width: 24px;
  background-color: #fff6e9;
  flex: 1;
  flex-grow: 1;
  height: 32px;
  max-width: 56px;
  position: relative;
`;

const InteractiveButtons = ({ prop, search }) => {
  return (
    <Button>
      <input type="text" placeholder={prop} onChange={search} />
      <Icon src="/public/search.png" alt={prop} />
    </Button>
  );
};

export default InteractiveButtons;