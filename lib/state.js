import { useRouter } from "next/router";

export const defaultAnswers = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

export function load() {
  const { query } = useRouter();
  return deserialize(query['state'] || serialize(defaultAnswers));
}

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

function deserialize(data) {
  return JSON.parse(atob(data));
}
