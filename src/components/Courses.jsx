import styled from 'styled-components';
import CourseCard from './CourseCard';
import coursesData from "../courses.json";
import i18n from '../i18n';
// import { useState } from 'react';
// import { useTranslation } from 'react-i18next';

const CoursesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 32px;
  margin-top: 32px;
  padding: 65px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

`;

const UpcommingCourses = styled.div`
  
  text-align: center;
  color: #081957;
  font-size: 28px;
  font-family: 'Avenir Next';
  font-weight: 600;
  text-transform: uppercase;
  word-wrap: break-word;
`;

const Frame28 = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: inline-flex;
`;

const Courses = () => {
  const lang = i18n.language;


return (
    <> 
    <Frame28>
    <UpcommingCourses>{i18n.t('upcomingCourses', { lng: lang })}</UpcommingCourses>
    </Frame28>
    <CoursesContainer>
    {coursesData.map((course) => (
        <CourseCard
          key={course.id}
          title={course.title[lang]}
          description={course.description[lang]}
          imageUrl={course.imageUrl}
        />
      ))}
    </CoursesContainer>
    </>
  );
};

export default Courses;