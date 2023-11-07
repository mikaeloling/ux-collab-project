import React from 'react';
import styled from 'styled-components';
import InteractiveButtons from './InteractiveButtons';

const HeaderContainer = styled.div`
height: 130px;
background-color: #fff6e9;
display: flex;  
justify-content: space-between;
`;

const LogoSection = styled.div`
  height: auto;
  display: flex;
  
  
  align-items: center;
  gap: 11px;
`;
const LogoHorseHead = styled.img`
  width: 122px;
  color: #081957;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const LogoText1 = styled.div`
  font-size: 28px;
  font-family: "Nunito Sans-Bold", Helvetica;
  font-weight: 400; 
  color: #081957; 
  text-transform: capitalize; 
  word-wrap: break-word;  
  letter-spacing: 1.4px;
`;  

const LogoText = styled.div`
  font-size: 20px;
  font-family: "Nunito Sans-Bold", Helvetica;
  font-weight: 400;
  color: #081957;
  text-transform: capitalize;
  word-wrap: break-word;
  
`;

const MenuSection = styled.div`
  height: auto;
  display: grid;
  justify-content: space-between;
  align-items: center;
  gap: 11px;
`;

const CartCheckoutMenu = styled.div`
  align-items: float-end;
  position: relative;
  display: flex;
  gap: 16px;
`;

const TextWrapper = styled.div`
  font-size: 16px;
  color: #081957;
  text-transform: uppercase;
  letter-spacing: 0.8px;
`;

const MainMenu = styled.div`
  display: flex;
  
  gap: 24px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      
      <LogoSection>
        <LogoHorseHead src="public/hoselogo on white.png" alt="Horse Logo" />
        <TextContainer>
          <LogoText1>SADDLE UP</LogoText1>
          <LogoText>YOGA STUDIO</LogoText>
        </TextContainer>
      </LogoSection>
      
      <MenuSection>
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

          </MenuSection>
      
        
          
    </HeaderContainer>
  );
};

export default Header;