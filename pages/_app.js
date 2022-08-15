import '../styles/globals.css'
import { useRouter} from "next/router";
import { defaultAnswers, deserialize } from "../lib/state";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [answers, setAnswers] = useState(defaultAnswers);

  useEffect(() => {
    if (router.isReady && router.query['state']) {
      setAnswers(deserialize(router.query['state']));
    }
  }, [router.isReady])

  return <Component {...pageProps} answers={answers}/>
}

export default MyApp
