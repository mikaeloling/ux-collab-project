// import React from 'react';
// import styled from 'styled-components';
// import CourseCard from './CourseCard';

// const CoursesContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(1, 1fr);
//   gap: 32px;
//   margin-top: 32px;

//   @media (min-width: 768px) {
//     grid-template-columns: repeat(3, 1fr);
//   }
// `;

// const UpcomingSection = styled.div`
//   width: 100%;
//   height: 100%;
//   display: inline-flex;
//   justify-content: center;
//   align-items: center;
//   gap: 10;
// `;

// const UpcomingImage = styled.img`
//   width: 100%;
//   height: auto;
// `;

// const UpcomingText = styled.div`
//   flex: 1 1 1;
//   text-align: center;
//   color: #081957;
//   font-size: 28px;
//   font-family: 'Avenir Next';
//   font-weight: 600;
//   text-transform: uppercase;
//   word-wrap: break-word;
// `;

// const Courses = () => {
//   return (
//     <CoursesContainer>
//       <UpcomingText>Upcoming Courses</UpcomingText>
//       <UpcomingSection>
//       <CourseCard />
//       </UpcomingSection>
//     </CoursesContainer>
//   );
// };

// export default Courses;

import styled from 'styled-components';
import CourseCard from './CourseCard';
import coursesData from "../courses.json";

const CoursesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 32px;
  margin-top: 32px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Courses = () => {
  return (
    <CoursesContainer>
      {coursesData.map((course) => (
        <CourseCard
          key={course.id}
          title={course.title}
          description={course.description}
          imageUrl={course.imageUrl}
        />
      ))}
    </CoursesContainer>
  );
};

export default Courses;