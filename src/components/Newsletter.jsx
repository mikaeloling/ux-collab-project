import React from 'react';
import styled from 'styled-components';

const NewsletterContainer = styled.div`
  width: 100%;
  height: 500px;
  background-image: url('public/newsletter image.jpeg');
  background-size: cover;
  display:flex;
  align-items: center;
  background-color: transparent;
`;

const SignUpText = styled.div`
  flex: 1 1 0;
  text-align: center;
  color: #FFF6E9;
  font-size: 32px;
  font-family: 'Avenir Next';
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1.6px;
  word-wrap: break-word;
`;



const Newsletter = () => {
  return (
    <NewsletterContainer>
      <SignUpText>Sign up for our newsletter</SignUpText>
    </NewsletterContainer>
  );
};

export default Newsletter;