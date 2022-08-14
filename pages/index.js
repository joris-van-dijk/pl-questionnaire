import QuestionLayout from "../components/question_layout";
import { useData, stateQuery } from "../lib/state";

export default function Description() {
  const answers = useData();
  return (
    <QuestionLayout>
      <div className="prose mx-2 mb-3">
        <h2>Vragenlijst invloedstijlen</h2>
        <p>Welke vaardigheden zet je meestal in en welke vaardigheden minder? Dat wordt duidelijk met behulp van de
          volgende zelfanalyse. Geef aan in welke mater je het gedrag vertoont dat wordt omschreven.</p>
      </div>
      <div className="flex flex-row-reverse">
        <a role="button" className="btn btn-outline btn-primary" href={"questions/1" + stateQuery(answers)}>Start de
          vragenlijst</a>
      </div>
    </QuestionLayout>
  )
}
