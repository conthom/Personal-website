import Head from 'next/head';
import React from 'react';

export default function Gantt() {
    return (
        <div className="text-black h-screen">
            <Head>
                <title>Connor Thompson</title>
                <link rel="icon" href="/connor logo.png" />
            </Head>
            <div className="flex justify-center items-center h-full">
                <iframe
                    src="https://g4ntt.vercel.app/"
                    width="100%"
                    height="100%"
                    style={{ border: 'none' }}
                    title="Gantt Webview"
                />
            </div>
        </div>
    );
}
