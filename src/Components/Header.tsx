import { useState } from 'react';
import { Rules } from './Rules';

export const Header = () => {
  const [rulesAreVisible, setRulesAreVisible] = useState(false);

  return (
    <>
      <div className="container-top">
        <div className="navbar-item navbar-menu container heads">
          Bulls and Cows game
        </div>
      </div>

      <button
        className="button is-info is-small container rule  is-rounded"
        onClick={() => setRulesAreVisible(!rulesAreVisible)}
      >
        Rules
      </button>

      {rulesAreVisible && (
        <Rules
          setRulesAreVisible={setRulesAreVisible}
          rulesAreVisible={rulesAreVisible}
        />
      )}
    </>
  );
};
