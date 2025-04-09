import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

const translations = {
  kk: { message: "Миссия түн ортасында басталады." },
  en: { message: "The mission starts at midnight." },
  ru: { message: "Миссия начинается в полночь." }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("kk");

  const val = [
    language,
    setLanguage,
    translations[language].message, // матын озгертуге
  ];

  return (
    <LanguageContext.Provider value={val}>
        
      {children}

    </LanguageContext.Provider>
  );
};
