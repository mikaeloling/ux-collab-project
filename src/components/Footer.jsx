import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #202537;
`;

const FooterBackground = styled.div`
  
  background: #202537;
  
  
`;


const FooterContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoSection = styled.div`
  height: 165.5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 11px;
`;

const LogoHorseHead = styled.img`
  width: 152px;
  height: 165.5px;
`;

const LogoText = styled.div`
  padding: 12.46px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12.46px;
  display: inline-flex;
`;

const LogoPageTitle = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4.98px;
  display: flex;
`;

const SocialSection = styled.div`
  height: 88px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 52px;
`;

const FollowUs = styled.div`
  align-self: stretch;
  text-align: center;
  color: #FFF6E9;
  font-size: 20px;
  font-family: 'Avenir Next';
  font-weight: 400;
  text-transform: capitalize;
  word-wrap: break-word;
`;

const SocialMediaIcons = styled.div`
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  display: inline-flex;
`;

const SocialIcon = styled.img`
  width: 40px;
  height: 40px;
`;

const TermsPrivacyAccessibility = styled.div`
  text-align: center;
  color: #FFF6E9;
  font-size: 16px;
  font-family: 'Avenir Next';
  font-weight: 400;
  word-wrap: break-word;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterBackground />
      <FooterContent>
        <LogoSection>
          <LogoHorseHead src="public/horselogo_dark.png" />
          <LogoText>
            <LogoPageTitle>SADDLE UP YOGA STUDIO</LogoPageTitle>
          </LogoText>
        </LogoSection>
        <SocialSection>
          <div>
            <FollowUs>FOLLOW US</FollowUs>
            <SocialMediaIcons>
              <SocialIcon src="public/fbicon.png" alt="Facebook" />
              <SocialIcon src="public/twittericon.png" alt="Twitter" />
              <SocialIcon src="public/igicon.png" alt="Instagram" />
            </SocialMediaIcons>
          </div>
          <TermsPrivacyAccessibility>Terms & Conditions<br/>Privacy<br/>Accessibility</TermsPrivacyAccessibility>
        </SocialSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
