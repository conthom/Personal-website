import "@/styles/styles.css";
import { AppProps } from "next/app";
import React, { useState, useEffect } from "react";
import { Header } from "@/components/Header";

// import Footer from '@/components/Footer';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <div>
      <Header/>
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}