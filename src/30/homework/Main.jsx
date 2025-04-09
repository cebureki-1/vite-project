import React, { useContext } from 'react';
import { LanguageContext } from './LanguageProvider';

const Main = () => {
  const [language, setLanguage, translations] = useContext(LanguageContext);

  return (
    <div>
        <h1>{translations}</h1>
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="kk">Қазақша</option>
        <option value="en">English</option>
        <option value="ru">Русский</option>
      </select>
    </div>
  );
};

export default Main;
