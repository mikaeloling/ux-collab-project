import React from 'react';
import styled from 'styled-components';
import InteractiveButtons from './InteractiveButtons';

const HeaderContainer = styled.div`
height: 130px;
width: 100%;

  
`;

const Frame = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px;
  justify-content: center;
  align-items: center;
  gap: 0px;
`;

const LogoSection = styled.div`
  height: auto;
  display: grid;
  grid-template-columns: 152px 1fr 1fr;
  justify-content: flex-start;
  align-items: center;
  gap: 11px;
`;
const LogoHorseHead = styled.img`
  width: 122px;
  margin: 0px;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const LogoText1 = styled.div`
  font-size: 20px;
  font-family: 'Avenir Next'; 
  font-weight: 400; 
  color: #FFF6E9; 
  text-transform: capitalize; 
  word-wrap: break-word;  
`;  

const LogoText = styled.div`
  font-size: 20px;
  font-family: 'Avenir Next';
  font-weight: 400;
  color: #FFF6E9;
  text-transform: capitalize;
  word-wrap: break-word;
`;


const CartCheckoutMenu = styled.div`
  display: flex;

  align-items: float-end;
  gap: 16px;
`;

const TextWrapper = styled.div`
  font-size: 16px;
  
  font-weight: bold;
  color: #081957;
  text-transform: uppercase;
  letter-spacing: 0.8px;
`;

const MainMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      
      <LogoSection>
        <LogoHorseHead src="public/horselogo_dark.png" alt="Horse Logo" />
        <TextContainer>
          <LogoText1>SADDLE UP</LogoText1>
          <LogoText>YOGA STUDIO</LogoText>
        </TextContainer>
      </LogoSection>
      
        
          <CartCheckoutMenu>
            <TextWrapper>Cart (0)</TextWrapper>
            <TextWrapper>Checkout</TextWrapper>
          </CartCheckoutMenu>
          <MainMenu>
            <TextWrapper>ABOUT US</TextWrapper>
            <TextWrapper>OUR COURSES</TextWrapper>
            <TextWrapper>RESOURCES</TextWrapper>
            <TextWrapper>SHOP</TextWrapper>
            <InteractiveButtons prop="search-field-button" search="image.png" />
          </MainMenu>
          
        
          
    </HeaderContainer>
  );
};

export default Header;