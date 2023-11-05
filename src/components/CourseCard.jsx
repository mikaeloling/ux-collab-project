import styled from 'styled-components';

const CourseCardContainer = styled.div`
  width: 100%;
  
  background: white;
  border-radius: 12px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0px;
  display: inline-flex;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow-x: auto; /* Enable horizontal scrolling for tablets and mobile */
    white-space: nowrap; /* Prevent content from wrapping */
  }
`;



const CourseImage = styled.img`
  
  height: 222px;
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;

`;

const CourseTitle = styled.div`
  text-align: center;
  position: relative;
  margin-top: 0px;
  content-align: center;
  background-color: transparent;
  color: #FFF6E9;
  font-size: 32px;
  font-family: 'Avenir Next';
  font-weight: 600;
  text-transform: capitalize;
  word-wrap: break-word;
`;

const CourseDescription = styled.div`
  flex: 1 1 0;
 
`;

const CourseCardContainer2 = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  
`;


const CourseCard = ({title, description, imageUrl }) => {
  return (
    <div>
    <CourseCardContainer>
      <CourseImage src={imageUrl} />
      <CourseTitle>{title}</CourseTitle>
     </CourseCardContainer>
      
      <CourseCardContainer2>
        <CourseDescription>
          {description}
        </CourseDescription>
        </CourseCardContainer2>
        </div>
  );
};

export default CourseCard;