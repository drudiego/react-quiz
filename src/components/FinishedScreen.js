function FinishedScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = Math.ceil((points / maxPossiblePoints) * 100);

  let emoji;
  if (percentage >= 80) {
    emoji = "🥳";
  } else if (percentage >= 50) {
    emoji = "👌";
  } else if (percentage >= 30) {
    emoji = "👍";
  } else {
    emoji = "😭";
  }

  return (
    <>
      <p className="result">
        {emoji} You got {points} out of {maxPossiblePoints} ({percentage}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button class="btn btn-ui" onClick={() => dispatch({ type: "restart" })}>
        Restart the game
      </button>
    </>
  );
}

export default FinishedScreen;
