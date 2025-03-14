import Head from "next/head";
import React from "react";

export default function Resume() {
  return (
    <div className="text-black h-screen">
      <Head>
        <title>Connor Thompson</title>
        <link rel="icon" href="/connor logo.png" />
      </Head>
      <div className="flex justify-center items-center h-full">
        <embed
          src="/Connor Thompson Resume 2025.pdf"
          type="application/pdf"
          width="80%"
          height="90%"
          className="w-full mt-20"
        />
      </div>
    </div>
  );
}
