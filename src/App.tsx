import React from 'react';
import 'bulma/css/bulma.min.css';

import { Header } from './Components/Header';
import { Main } from './Components/Main';

export const App = () => {
  return (
    <div className="page">
      <div className="pageback">
        <Header />
        <div>
          <Main />
        </div>
      </div>
    </div>
  );
};

