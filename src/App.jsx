import styled from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export const App = () => {
  
  const AppContainer = styled.div`
    display: grid;  
  
`;

  return (
    <>
    <AppContainer>
    
      <Header /> 
      <Hero />
      <Courses />
       <Newsletter />
      <Footer />

   </AppContainer>

   </>
  );
};

export default App;
