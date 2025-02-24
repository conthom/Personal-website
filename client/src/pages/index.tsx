import Head from 'next/head';
import Image from 'next/image';
import Intro from '@/components/Intro';

export default function Index() {
    return (
        <div style={{ overflowX: 'hidden' }} className="text-black h-screen">
            <Head>
            <title>Connor Thompson</title>
            <link rel="icon" href="/connor logo.png" />
            </Head>
            <Intro/>
        </div>
    );
}
