import type { NextPage } from "next";
import Head from "next/head";
import Center from "../components/Center"
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Music Player</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Hello World</h1>
      <main className="flex">
       <Sidebar />
       <Center />
      </main>
      <div>
        {/*player*/}
      </div>
    </div>
  );
};

export default Home;
