import Head from "next/head";
import QuestionLayout from "../components/question_layout";
import { skills, styles } from "../lib/questions";
import {calculateScores} from "../lib/score";

export default function Result({ answers, skills, styles }) {
  const skillScores = calculateScores(answers);
  return (
    <QuestionLayout answers={answers}>
      <Head>
        <title>Resultaat</title>
      </Head>
      <div className="prose mx-2 mb-3">
        <h2>Resultaat</h2>
        <p>Hieronder vind je het resultaat van de vragenlijst. Sla de URL in de adresbalk op om dit resultaat te bewaren
          of te delen.</p>
      </div>

      <div className="prose mx-2 mb-3">
        <h3>Vaardigheden</h3>
      </div>
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th>Vaardigheid</th>
            <th className="text-center">Score</th>
          </tr>
        </thead>
        <tbody>
        {
          skills.map((skill) => (
            <tr key={skill}>
              <td className="whitespace-normal">{skill}</td>
              <td className="text-center">{skillScores[skill]}</td>
            </tr>
          ))
        }
        </tbody>
      </table>

      <div className="divider"/>

      <div className="prose mx-2 mb-3">
        <h3>Gedrag</h3>
      </div>
      <table className="table table-compact w-full">
        <thead>
        <tr>
          <th>Gedragssoort</th>
          <th className="text-center">Score</th>
        </tr>
        </thead>
        <tbody>
        {
          Object.entries(styles).map(([style, skills]) => (
            <tr key={style}>
              <td className="whitespace-normal">{style}</td>
              <td className="text-center">{skills.map((skill) => skillScores[skill]).reduce((s, c) => s + c, 0)}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </QuestionLayout>
  )
}

export async function getStaticProps({}) {
  return {
    props: {
      skills: skills,
      styles: styles
    }
  }
}
