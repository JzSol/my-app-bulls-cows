interface RulesProps {
  setRulesAreVisible: (visible: boolean) => void;
  rulesAreVisible: boolean;
}

export const Rules: React.FC<RulesProps> = ({
  setRulesAreVisible,
  rulesAreVisible,
}) => {
  return (
    <div>
      <div className="notification is-link is-light mb-3">
        <button
          className="delete"
          onClick={() => setRulesAreVisible(!rulesAreVisible)}
        ></button>
        <p>
          {' '}
          When the player makes a guess, the computer responds with two numbers:
          the number of "bulls" and the number of "cows".
        </p>
        <strong>
          <div>
            A "bull" means that the player guessed a digit that is in the
            correct position in the secret number.
          </div>

          <div>
            A "cow" means that the player guessed a digit that is in the secret
            number, but in the wrong position.
          </div>
        </strong>
        <p>
          The player continues to make guesses until they correctly guess the
          entire 4-digit number (i.e., when they get 4 bulls). The goal is to
          guess the number in as few guesses as possible.
        </p>
      </div>
    </div>
  );
};
