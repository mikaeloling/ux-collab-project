import React from 'react';
import styled from 'styled-components';
import InteractiveButtons from './InteractiveButtons';

const HeaderContainer = styled.div`
background-color: #fff6e9;
height: 130px;
width: 100%;
  
`;

const Frame = styled.div`
  
align-items: center;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  
  bottom: 11px;
  top: 11px;
  position: relative;
  
  width: 100%;
  `;

const Logo = styled.div`
  width: 50px;
  height: 50px;
  `;


const LogoPageTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoPageTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 16px;
`;

const SaddleUp = styled.p`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  color: #081957;
  text-transform: uppercase;
  letter-spacing: 1.2px;
`;

const YogaStudio = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #081957;
  text-transform: uppercase;
  letter-spacing: 0.8px;
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
      <Frame>
        <div>
        <Logo>
          <img src="public/hoselogo on white.png"  height = "50px" width = "50px" />
        </Logo>
        {/* <LogoPageTitleWrapper> */}
          <SaddleUp>saddle up</SaddleUp>
          <LogoPageTitle>
            <YogaStudio>YOGA STUDIO</YogaStudio>
          </LogoPageTitle>
          </div>
        {/* </LogoPageTitleWrapper> */}
        <div>
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
          </div>
          
          </Frame>
    </HeaderContainer>
  );
};

export default Header;