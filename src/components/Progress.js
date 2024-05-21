function Progress({ index, answer, points, numQuestions, maxPossiblePoints }) {
  return (
    <div>
      <header className="progress">
        <progress max={numQuestions} value={index + Number(answer !== null)} />

        <p>
          Question <strong>{index + 1}</strong> / {numQuestions}
        </p>

        <p>
          <strong>{points}</strong> / {maxPossiblePoints}
        </p>
      </header>
    </div>
  );
}

export default Progress;
