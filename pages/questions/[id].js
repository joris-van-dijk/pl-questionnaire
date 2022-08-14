import Head from "next/head";
import QuestionLayout from '../../components/question_layout';
import { getAllQuestionIds, getQuestionData } from '../../lib/questions'
import { useData, progress, withAnswer } from "../../lib/state";
import { firstBlankQuestionUrl } from "../../lib/links";

export default function Question({ questionData }) {
  const answers = useData();
  const questionId = Number(questionData.id);
  const title = "Vraag " + questionData.id;
  const currentAnswer = answers[questionId - 1];
  return (
    <QuestionLayout>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="prose mx-2 mb-3">
        <h2>{questionData.question}</h2>
        <div className="btn-group btn-group-vertical">
          <a role="button" className={currentAnswer === 5 ? "btn btn-active" : "btn btn-outline btn-primary"} href={firstBlankQuestionUrl(withAnswer(answers, questionId, 5))}>(bijna) altijd</a>
          <a role="button" className={currentAnswer === 4 ? "btn btn-active" : "btn btn-outline btn-primary"} href={firstBlankQuestionUrl(withAnswer(answers, questionId, 4))}>vaak, meer dan gemiddeld</a>
          <a role="button" className={currentAnswer === 3 ? "btn btn-active" : "btn btn-outline btn-primary"} href={firstBlankQuestionUrl(withAnswer(answers, questionId, 3))}>regelmatig, net als andere mensen</a>
          <a role="button" className={currentAnswer === 2 ? "btn btn-active" : "btn btn-outline btn-primary"} href={firstBlankQuestionUrl(withAnswer(answers, questionId, 2))}>af en toe, minder dan gemiddeld</a>
          <a role="button" className={currentAnswer === 1 ? "btn btn-active" : "btn btn-outline btn-primary"} href={firstBlankQuestionUrl(withAnswer(answers, questionId, 1))}>(bijna) nooit</a>
        </div>
      </div>
      <div className="flex flex-col">
        <progress className="progress" max="100" value={progress(answers)} />
      </div>
    </QuestionLayout>
  )
}

export async function getStaticPaths() {
  const paths = getAllQuestionIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const questionData = getQuestionData(params.id);
  return {
    props: {
      questionData
    },
  };
}
