import Head from "next/head";
import QuestionLayout from "../../components/question_layout";
import { done, stateQuery } from "../../lib/state";
import { questions } from "../../lib/questions";
import { useRouter } from "next/router";

export default function AllQuestions({ answers, data }) {
  const router = useRouter();
  const complete = done(answers)
  const handleRowClick = (id) => {
    router.push(`/questions/${id}` + stateQuery(answers));
  }
  return (
    <QuestionLayout answers={answers}>
      <Head>
        <title>Overzicht</title>
      </Head>
      <div className="prose mx-2 mb-5">
        <h2>Overzicht</h2>
        <p className={complete ? "whitespace-normal" : "hidden"}>Je hebt alle vragen beantwoord. Hieronder zie je ze
          allemaal nog een keer. De scores zijn ingevuld op een schaal van 1 ((bijna) nooit) tot 5 ((bijna) altijd).
          Klik op een vraag als je deze nog aan wilt passen, of ga naar het resultaat via de knop onderaan de
          pagina.</p>
        <p className={complete ? "hidden" : "whitespace-normal"}>Je hebt nog niet alle vragen beantwoord. Bekijk
          hieronder welke je nog in moet vullen. Als alle vragen zijn ingevuld kun je het resultaat bekijken.</p>
      </div>
      <table className="table table-compact w-full mb-5">
        <thead>
          <tr>
            <th/>
            <th>Vraag</th>
            <th className="text-center">Keuze</th>
          </tr>
        </thead>
        <tbody>
        {
          data.map((question) => {
            const answer = answers[question.id - 1]
            return (
              <tr key={question.id} onClick={() => handleRowClick(question.id)} className="hover:cursor-pointer">
                <td>{question.id}</td>
                <td className="whitespace-normal">{question.question}</td>
                <td className="text-center">{answer > 0 ? answer : "_"}</td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
      <div className={complete ? "flex flex-row-reverse" : "hidden"}>
        <a role="button" className="btn btn-outline btn-primary" href={"result" + stateQuery(answers)}>Bekijk het
          resultaat</a>
      </div>
    </QuestionLayout>
  )
}

export async function getStaticProps({}) {
  const questionData = Object.entries(questions).map(([key, value]) => {
    return {
      id: Number(key),
      question: value.question
    }
  })
  return {
    props: {
      data: questionData
    }
  }
}
