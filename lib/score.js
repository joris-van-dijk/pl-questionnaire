import { questions, skills } from "./questions";

function calculateSkillScore(answers, skill) {
  return Object.keys(questions).filter(
    (key) => questions[key].skill === skill
  ).map(
    (key) => answers[Number(key) - 1]
  ).reduce(
    (sum, current) => sum + current, 0
  )
}

export function calculateScores(answers) {
  return Object.assign(
    {},
    ...skills.map((skill) => {
      return {
        [skill]: calculateSkillScore(answers, skill)
      }
    })
  )
}
