export const defaultAnswers = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

export const newStateQuery = "?state=" + serialize(defaultAnswers);

export function stateQuery(answers) {
  return "?state=" + serialize(answers)
}

export function done(answers) {
  return !answers.some((answer) => answer === 0);
}

export function progress(answers) {
  return ((answers.filter((a) => a !== 0).length) / answers.length) * 100
}

export function withAnswer(answers, questionId, answer) {
  const newAnswers = [...answers];
  newAnswers[questionId - 1] = answer;
  return newAnswers
}

function serialize(data) {
  return btoa(JSON.stringify(data || defaultAnswers));
}

export function deserialize(data) {
  return JSON.parse(atob(data));
}
