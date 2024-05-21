function FinishedScreen({ points, maxPossiblePoints }) {
  const percentage = Math.ceil((points / maxPossiblePoints) * 100);
  return (
    <p className="result">
      You got {points} out of {maxPossiblePoints} ({percentage}%)
    </p>
  );
}

export default FinishedScreen;
