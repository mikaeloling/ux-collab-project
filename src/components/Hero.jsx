import styled from 'styled-components';

const HeroContainer = styled.div`
  
  display: flex;
  flex-direction: column;

`;

// const HeroImage = styled.img`
  
//   height: 652px;
//   width: auto;
//   object-fit: cover;

// `;

const HeroImage = styled.div`
 
  height: 652px;
  align-items: center;
  background-image: url('/hero image.JPG');
  background-size: cover;
  background-position: center center;
`;

const MissionContainer = styled.div`
  margin-top: 361px;
  display: grid;
  flex-direction: column;
  align-items: center;
  `;

const Frame30 = styled.div`
  width: 100%;
  height: 208px;
  display: grid;
  background-color: #fff6e9;
  justify-content: center;
`;
const OurMission = styled.div`
  padding-top: 24px;
  text-align: center;
  color: #081957;
  font-size: 36px;
  font-family: "Nunito Sans-Bold", Helvetica;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.80px;
  word-wrap: break-word;
  
`;
const HeroText = styled.div`
  
  margin-top: 12px;
  max-width: 544px;
  color: black;
  font-size: 16px;
  font-family: "Nunito Sans-Bold", Helvetica;
  font-weight: 400;
  word-wrap: break-word;

`;

const ButtonDarkGrey = styled.div`
  align-items: center;
  border-radius: 8px;
  background-color: #fff6e9;
  margin-top: 11px;

  width: 218px;
  margin-left: 50%; 
  transform: translateX(-50%);
  padding: 16px 24px;
  position: relative;
  text-align: center;

  .VIEW-ALL-OUR-COURSES {
    font-family: "Avenir Next-Medium", Helvetica;
    font-size: 16px;
    font-weight: 500;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      {/* <HeroImage src="/hero image.JPG" alt="Hero Image" /> */}
      <HeroImage>
      <MissionContainer>
        <Frame30>
          <OurMission>our mission</OurMission>
          <HeroText>
            At our yoga studio, we're on a mission to support equestrians. We provide specialized yoga classes to enhance riders' strength, balance, and well-being, fostering a deeper connection between horse and rider. Join us in promoting a holistic approach to horsemanship and self-care.
          </HeroText>
        </Frame30>
        
      </MissionContainer>
      <ButtonDarkGrey>
          <div className="VIEW-ALL-OUR-COURSES">VIEW ALL OUR COURSES</div>
        </ButtonDarkGrey>
      </HeroImage>
    </HeroContainer>
  );
};

export default Hero;