import Head from 'next/head';
import Image from 'next/image';



export default function Index() {
    return (
        <div className="bg-white text-black h-screen">
            <Head>
            <title>Connor Thompson</title>
            <link rel="icon" href="/connor logo.png" />
            </Head>
            <div className="flex justify-center items-center h-full">
            <Image
                src="/Connor cropped.jpg"
                alt="Connor Thompson"
                width={250}
                height={250}
                className="rounded-full"
            />
            </div>
            <div>
                

            </div>

        </div>
    );
}
