import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
`;

const TextSection = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: rgba(255, 255, 255, 0.50);
  padding-top: 8px;
  padding-bottom: 8px;
  gap: 12px;
`;

const MissionText = styled.div`
  align-self: stretch;
  text-align: center;
  color: black;
  font-size: 36px;
  font-family: 'Avenir Next';
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.80px;
  word-wrap: break-word;
`;

const TextContent = styled.div`
  width: 640px;
  flex: 1 1 0;
  padding-left: 48px;
  padding-right: 48px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

const HeroText = styled.div`
  flex: 1 1 0;
  align-self: stretch;
  color: black;
  font-size: 16px;
  font-family: 'Avenir Next';
  font-weight: 400;
  word-wrap: break-word;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroImage src="public/hero image.JPG" alt="Hero Image" />
      <TextSection>
        <MissionText>Our Mission</MissionText>
        <TextContent>
          <HeroText>
            At our yoga studio, we're on a mission to support horseback riders. We provide specialized yoga classes to enhance riders' strength, balance, and well-being, fostering a deeper connection between horse and rider. Join us in promoting a holistic approach to horsemanship and self-care.
          </HeroText>
        </TextContent>
      </TextSection>
    </HeroContainer>
  );
};

export default Hero;
