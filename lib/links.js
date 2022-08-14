import { done, stateQuery } from "./state";

export function firstBlankQuestionId(answers) {
  return answers.findIndex((answer) => answer === 0) + 1
}

export function firstBlankQuestionUrl(answers) {
  if (done(answers)) {
    return "/questions" + stateQuery(answers)
  } else {
    return "/questions/" + firstBlankQuestionId(answers) + stateQuery(answers)
  }
}
