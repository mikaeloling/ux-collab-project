import React from 'react';

const LanguageToggle = ({ toggleLanguage }) => {
  return (
    <button onClick={toggleLanguage}>Switch to Swedish</button>
  );
};

export default LanguageToggle;
