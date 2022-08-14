import Head from "next/head";
import QuestionLayout from "../components/question_layout";
import { useData } from "../lib/state";
import { styles, skills } from "../lib/questions";
import { calculateScores } from "../lib/score";

export default function Result() {
  const answers = useData();
  const skillScores = calculateScores(answers);
  return (
    <QuestionLayout>
      <Head>
        <title>Resultaat</title>
      </Head>
      <div className="prose mx-2 mb-3">
        <h2>Resultaat</h2>
        <p>Hieronder vindt je het resultaat van de vragenlijst. Sla de URL in de adresbalk op om dit resultaat te bewaren of te delen.</p>
      </div>

      <div className="prose mx-2 mb-3">
        <h3>Vaardigheden</h3>
      </div>
      <table className="table table-compact w-full">
        <thead>
          <th>Vaardigheid</th>
          <th className="text-center">Score</th>
        </thead>
        <tbody>
          { skillRows(skillScores) }
        </tbody>
      </table>

      <div className="divider"/>

      <div className="prose mx-2 mb-3">
        <h3>Gedrag</h3>
      </div>
      <table className="table table-compact w-full">
        <thead>
          <th>Gedragssoort</th>
          <th className="text-center">Score</th>
        </thead>
        <tbody>
          { styleRows(skillScores) }
        </tbody>
      </table>
    </QuestionLayout>
  )
}

function skillRows(skillScores) {
  return skills.map((skill) => (
    <tr key={skill}>
      <td className="whitespace-normal">{skill}</td>
      <td className="text-center">{skillScores[skill]}</td>
    </tr>
  ))
}

function styleRows(skillScores) {
  return Object.entries(styles).map(([style, skills]) => (
    <tr key={style}>
      <td className="whitespace-normal">{style}</td>
      <td className="text-center">{skills.map((skill) => skillScores[skill]).reduce((s, c) => s + c, 0)}</td>
    </tr>
  ))
}
