import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const Home = () => {
  const router = useRouter(); // Used for routing
  return (
    <>
      <Head>
        <title>Welcome!</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="h-screen bg-slate-100 flex items-center justify-center">
        <div className="flex flex-col items-center space-y-5">
          <h1 className="font-bold text-5xl">Welcome to My Dashboard</h1>
          {/* Click to go to sales-dashboard page */}
          <button
            className="bg-orange-400 text-white font-bold px-4 py-2 rounded-full hover:bg-orange-500"
            onClick={() => router.push("/sales-dashboard")}
          >
            Go to Sales Dashboard
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
