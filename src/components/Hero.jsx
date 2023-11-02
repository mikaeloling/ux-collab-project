import styled from 'styled-components';

const HeroContainer = styled.div`
  
  display: flex;
  flex-direction: column;

`;

const HeroImage = styled.img`
  
  height: 652px;
  width: auto;
  object-fit: cover;

`;

const Frame29 = styled.div`
 
  padding-top: 24px;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`;

const OurMission = styled.div`
  text-align: center;
  color: #081957;
  font-size: 36px;
  font-family: 'Avenir Next';
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.80px;
  word-wrap: break-word;
`;

const Frame30 = styled.div`
  width: 640px;
  height: 101px;
  padding-left: 48px;
  padding-right: 48px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

const HeroText = styled.div`
  
  color: black;
  font-size: 16px;
  font-family: 'Avenir Next';
  font-weight: 400;
  word-wrap: break-word;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroImage src="/hero image.JPG" alt="Hero Image" />
      <Frame29>
        <OurMission>our mission</OurMission>
        <Frame30>
          <HeroText>
            At our yoga studio, we're on a mission to support equestrians. We provide specialized yoga classes to enhance riders' strength, balance, and well-being, fostering a deeper connection between horse and rider. Join us in promoting a holistic approach to horsemanship and self-care.
          </HeroText>
        </Frame30>
      </Frame29>
    </HeroContainer>
  );
};

export default Hero;