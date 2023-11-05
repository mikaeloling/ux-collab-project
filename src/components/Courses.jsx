import styled from 'styled-components';
import CourseCard from './CourseCard';
import coursesData from "../courses.json";
import i18n from '../i18n';
// import { useState } from 'react';
// import { useTranslation } from 'react-i18next';

const CoursesWrapper = styled.div`

  background: src/assets/images/Rectangle 1.png;
  width: 100%;
  height: 100%;
 
  justify-content: center;
  align-items: center;

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  
  


`;

const CoursesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 32px;
  padding: 65px;


  @media (max-width: 800px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow-x: auto; /* Enable horizontal scrolling for tablets and mobile */
    white-space: nowrap; /* Prevent content from wrapping */
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
  padding: 0px;
  justify-content: center;
  align-items: center;
  gap: 0px;
  display: inline-flex;
`;

const ButtonViewAllCourses = styled.div`
  align-items: center;
  border-radius: 8px;
  gap: 10px;
  background-color: #081957;
  margin-top: 50px;
  margin-bottom: 50px;
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

const Courses = () => {
  const lang = i18n.language;


return (
    <> 
    <CoursesWrapper>
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
    </CoursesWrapper>
    <ButtonViewAllCourses>{i18n.t('viewAllCourses', { lng: lang })}</ButtonViewAllCourses>
    </>
  );
};

export default Courses;