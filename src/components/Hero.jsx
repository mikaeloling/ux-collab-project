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
  gap: 0px;
  background-image: url('public/hero image.JPG');
  background-size: cover;
`;

const MissionContainer = styled.div`
  margin-top: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0px;
  background-color: grey;
  `;

const Frame30 = styled.div`
  width: 100%;
  height: 160px;
  
  display: grid;
  grid-template-columns: 1fr;
  flex: 1
  0 1 0
  align-items: center;
  
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
  background-color: #fff6e9;
`;
const HeroText = styled.div`
  padding-left: 167px;
  padding-right: 167px;
  color: black;
  font-size: 16px;
  font-family: 'Avenir Next';
  font-weight: 400;
  word-wrap: break-word;
  background-color: #fff6e9;

`;

const ButtonDarkGrey = styled.div`
  align-items: center;
  border-radius: 8px;
  gap: 10px;
  background-color: #081957;
  margin-top: 50px;
  width: 218px;
  margin-left: 50%; 
  transform: translateX(-50%);
  gap: 10px;
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