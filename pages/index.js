import QuestionLayout from "../components/question_layout";
import { done, stateQuery } from "../lib/state";

export default function Description({ answers }) {
  const complete = done(answers)
  return (
    <QuestionLayout answers={answers}>
      <div className="prose mx-2 mb-3">
        <h2>Vragenlijst invloedstijlen</h2>
        <p>Welke vaardigheden zet je meestal in en welke vaardigheden minder? Dat wordt duidelijk met behulp van de
          volgende zelfanalyse. Geef aan in welke mate je het gedrag vertoont dat wordt omschreven.</p>
      </div>
      <div className="flex flex-row-reverse">
        <a role="button"
           className={complete ? "hidden" : "btn btn-outline btn-primary"}
           href={"questions/1" + stateQuery(answers)}
        >Start de vragenlijst</a>
        <a role="button"
           className={complete ? "btn btn-outline btn-primary" : "hidden"}
           href={"questions/1"}
        >Start opnieuw</a>
      </div>
    </QuestionLayout>
  )
}
