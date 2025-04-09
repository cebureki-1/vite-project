// App.jsx
import React from 'react';
import { LanguageProvider } from './LanguageProvider';
import Test from './Test';

const App = () => {
  return (
    <LanguageProvider>
      <div>
        <h1> HomeWork useContext</h1>
        <Test />
      </div>
    </LanguageProvider>
  );
};

export default App;
