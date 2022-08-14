import Head from "next/head";
import Link from "next/link";
import { useData, done, stateQuery } from "../lib/state";

export default function QuestionLayout({ children }) {
  const answers = useData();
  const query = stateQuery(answers);
  return (
    <>
      <Head>
        <html data-theme="garden"/>
        <title>Beïnvloedingsstijlen</title>
      </Head>
      <div className="flex">
        <div className="max-w-md mx-2 mb-5 sm:mx-auto">
          <div className="navbar w-full">
            <div className="navbar-start"></div>
            <div className="navbar-end md:hidden">
              <div className="dropdown dropdown-end">
                <label tabIndex="0" className="btn btn-ghost btn-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7"/>
                  </svg>
                </label>
                <ul tabIndex="0" className="dropdown-content menu menu-compact mt-3 p-2 bg-base-100 shadow rounded-box w-52 mt-4">
                  <li><Link href="/">Nieuw</Link></li>
                  <li><Link href={"/" + query}>Uitleg</Link></li>
                  <li><Link href={"/questions" + query}>Overzicht</Link></li>
                  <li className={done(answers) ? "" : "hidden"}><Link href={"/result" + query}>Resultaat</Link></li>
                </ul>
              </div>
            </div>
            <div className="navbar-end hidden md:flex">
              <ul className="menu menu-horizontal p-0">
                <li><Link href="/">Nieuw</Link></li>
                <li><Link href={"/" + query}>Uitleg</Link></li>
                <li><Link href={"/questions" + query}>Overzicht</Link></li>
                <li className={done(answers) ? "" : "hidden"}><Link href={"/result" + query}>Resultaat</Link></li>
              </ul>
            </div>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </>
  )
}
