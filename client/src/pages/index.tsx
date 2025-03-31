import Head from "next/head";
import Intro from "@/components/Intro";
import React from "react";

export default function Index() {
  return (
    <div style={{ overflowX: "hidden" }} className="min-h-[125vh]">
      <Head>
        <title>Connor Thompson</title>
        <link rel="icon" href="/connor logo.png" />
      </Head>
      <Intro />
    </div>
  );
}
