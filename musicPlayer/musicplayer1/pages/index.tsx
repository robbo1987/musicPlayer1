import type { NextPage } from "next";
import { getSession, GetSessionParams } from "next-auth/react";
import Head from "next/head";
import Center from "../components/Center"
import Sidebar from '../components/Sidebar'
import Player from "../components/Player"

const Home = () => {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Music Player</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex">
       <Sidebar />
       <Center />
      </main>
      <div className= "sticky bottom-0" >
    
        <Player />
      </div>
    </div>
  );
};

export async function getServerSideProps(context: GetSessionParams | undefined) {
  const session = await getSession (context);

  return {
    props: {
      session
    }
  }
}

export default Home;
