import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  width: 100%;
  height: 100%;
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
  
  font-family: "Avenir Next-Bold", Helvetica;
  font-size: 24px;
  font-weight: 400;
  color: #FFF6E9;
  text-transform: capitalize;
  word-wrap: break-word;
`;

const LogoText = styled.div`
  font-family: "Nunito Sans", Helvetica;
  font-size: 18px;
  font-weight: 400;font-family: "Avenir Next-Regular", Helvetica;
  color: #FFF6E9; 
  text-transform: capitalize; 
  word-wrap: break-word;  
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


const SecondFooterContainer = styled.div`
  
  background: #202537;
`;

const SecondFooterContent = styled.div`
  
  display: grid;
  justify-content: center;  
  align-items: center;  
`;  

const SecondFooterText = styled.div`
  text-align: center;
  color: #FFF6E9; 
  font-size: 16px;  
  font-family: 'Avenir Next'; 
  font-weight: 400; 
  word-wrap: break-word;
`;

const SecondFooterIcons = styled.div`
  justify-content: center;
  align-items: center;
  gap: 16px;
  display: inline-flex;
`;

const SecondFooterIcon = styled.img`
  width: 40px;
  height: 40px;
`;



const Footer = () => {
  return (
    <div>
    <FooterContainer>
      <FooterContent>

      <LogoSection>
        <LogoHorseHead src="public/horselogo_dark.png" alt="Horse Logo" />
        <TextContainer>
          <LogoText1>SADDLE UP</LogoText1>
          <LogoText>YOGA STUDIO</LogoText>
        </TextContainer>
      </LogoSection>

        <SocialSection>
            <FollowUs>FOLLOW US</FollowUs>
            <SocialMediaIcons>
              <SocialIcon src="public/fbicon.png" alt="Facebook" />
              <SocialIcon src="public/twittericon.png" alt="Twitter" />
              <SocialIcon src="public/igicon.png" alt="Instagram" />
            </SocialMediaIcons>
          <TermsPrivacyAccessibility>Terms & Conditions<br/>Privacy<br/>Accessibility</TermsPrivacyAccessibility>
        </SocialSection>
      </FooterContent>
      </FooterContainer>

      <SecondFooterContainer>
      <SecondFooterContent>
        <SecondFooterIcons>
          <SecondFooterIcon src="public/fbicon.png" alt="Facebook" />
          <SecondFooterIcon src="public/twittericon.png" alt="Twitter" />
        </SecondFooterIcons>
        <SecondFooterText>© 2023 Saddle Up Yoga Studio</SecondFooterText>
      </SecondFooterContent>
      </SecondFooterContainer>
</div>


  );
};


export default Footer;
