import Head from "next/head";
import Intro from "@/components/Intro";
import React from "react";

type IndexProps = {
  siteOrigin: string;
};

export async function getStaticProps() {
  const hostname =
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL ??
    "localhost:3000";

  return {
    props: {
      siteOrigin: `https://${hostname}`,
    },
  };
}

export default function Index({ siteOrigin }: IndexProps) {
  return (
    <div style={{ overflowX: "hidden" }} className="min-h-[125vh]">
      <Head>
        <title>Connor Thompson</title>
        <link rel="icon" href="/connor logo.png" />
        <meta
          property="og:image"
          content={`${siteOrigin}/connor%20logo.png`}
        />
        <meta property="og:image:alt" content="Connor Thompson logo" />
      </Head>
      <Intro />
    </div>
  );
}
