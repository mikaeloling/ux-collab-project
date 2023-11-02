import styled from 'styled-components';

const CourseCardContainer = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 12px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  display: inline-flex;
`;

const CourseImage = styled.img`
  align-self: stretch;
  height: 222px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

const CourseTitle = styled.div`
  text-align: center;
  color: #FFF6E9;
  font-size: 32px;
  font-family: 'Avenir Next';
  font-weight: 600;
  text-transform: capitalize;
  word-wrap: break-word;
`;

const CourseDescription = styled.div`
  flex: 1 1 0;
  text-align: justify;
`;

const CourseCard = ({title, description, imageUrl }) => {
  return (
    <CourseCardContainer>
      <CourseImage src={imageUrl} />
      <CourseTitle>{title}</CourseTitle>
        <CourseDescription>
          {description}
        </CourseDescription>
    
    </CourseCardContainer>
  );
};

export default CourseCard;