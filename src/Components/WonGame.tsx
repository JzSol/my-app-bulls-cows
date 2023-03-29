export const WonGame = () => {
  return (
    <div>
      <div>
        <img
          src="image/bull.jpg"
          className="image is-128x128 container"
          alt="A bull, symbolizing the player's success"
        />
      </div>
      <div className="container title is-1 has-text-warning mt-2">
        {' '}
        You won the game!
      </div>
    </div>
  );
};
