import styled from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
// import React, { useState } from 'react';
// import LanguageToggle from './LanguageToggle'; // Import the language toggle component


const AppContainer = styled.div`
    display: grid;  
    font-family: "Avenir Next-Regular", Helvetica;
  
`;

  

export const App = () => {
  // const [lang, setLang] = useState('en'); // Initialize with English as the default language

  // const toggleLanguage = () => {
  //   const newLang = lang === 'en' ? 'sv' : 'en'; // Toggle between English and Swedish
  //   setLang(newLang);
  // };

  return (
    <>
    <AppContainer>
    
      <Header /> 
      <Hero />
      <Courses />
       <Newsletter />
      <Footer />
{/* Render the language toggle button */}
{/* <LanguageToggle toggleLanguage={toggleLanguage} /> */}
   </AppContainer>
     
   </>
  );
};

export default App;
