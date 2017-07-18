// ELO-rating library

const transform = (r1, r2, winner) => {
  const K = 32;

  const R1 = 10 ** (r1 / 400);
  const R2 = 10 ** (r2 / 400);

  const E1 = R1 / (R1 + R2);
  const E2 = R2 / (R1 + R2);

  const S1 = winner = 1 ? 1 : 0;
  const S2 = winner = 1 ? 0 : 1;

  const newWinnerElo = r1 + K * (S1 - E1);
  const newLoserElo = r2 + K * (S2 - E2);

  return { newWinnerElo, newLoserElo };
}

export default transform;