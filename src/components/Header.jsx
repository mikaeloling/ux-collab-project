import React from 'react';
import styled from 'styled-components';
import InteractiveButtons from './InteractiveButtons';

const HeaderContainer = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`;

const Frame = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
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
  align-items: center;
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
        <img className="image" alt="Image" src="public/hoselogo on white.png" />
        <LogoPageTitleWrapper>
          <SaddleUp>saddle up</SaddleUp>
          <LogoPageTitle>
            <YogaStudio>YOGA STUDIO</YogaStudio>
          </LogoPageTitle>
        </LogoPageTitleWrapper>
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
          </MainMenu>
        </div>
        <InteractiveButtons prop="search-field-button" search="image.png" />
      </Frame>
    </HeaderContainer>
  );
};

export default Header;