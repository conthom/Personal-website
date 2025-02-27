import Head from 'next/head';
import React, { useState } from 'react';

const About = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [reason, setReason] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission, possibly send email through an API or service
        console.log('Sending email with:', { name, email, message });
    };

    return (
        <div className="text-white h-screen flex flex-col items-center justify-center px-10 text-l bg-gray-900">
            <Head>
                <title>Connor Thompson</title>
                <link rel="icon" href="/connor logo.png" />
            </Head>
            <div className="mb-8 max-w-3xl mx-auto bg-gray-800 rounded-lg p-6 mt-60 leading-10">
                <h1 className="text-center text-4xl mb-4" style={{ fontFamily: 'Times New Roman, Times, serif' }}>About Me</h1>
                <p className="text-lg">
                    Hi, I'm <b>Connor Thompson</b>,
                    <br />a Computer Science student at <a href="https://www.indiana.edu/" className="text-blue-400 underline">Indiana University Bloomington</a>, specializing in software engineering to expand my real-world problem-solving skills.
                </p>
                <p className="text-lg text-left mt-5 mb-5 ">
                    More things about me:
                </p>
                <ul className="list-disc list-inside text-left">
                    <li>I'm seeking internship opportunities to develop my experience in the tech field.</li>
                    <li>I'm involved with the <a href="https://www.navigators.org/" className="text-blue-400 underline">Navigators</a> (a Christian organization on campus) and occasionally the Chess Club at IU.</li>
                    <li>In my free time, I enjoy a good audiobook, running, video games, and music.</li>
                </ul>

            </div>
            {/* Contact Form */}
            <div className="contact-form-container w-full max-w-md p-8 border border-white rounded mx-40">
                <h1 className="text-3xl mb-4">Contact Me</h1>
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name"
                        className="p-2 border border-white bg-gray-800 text-white rounded"
                        required
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your Email"
                        className="p-2 border border-white bg-gray-800 text-white rounded"
                        required
                    />
                    <div className="flex flex-col space-y-2">
                        <label className="text-lg">What's up?</label>
                        <label>
                            <input
                                type="radio"
                                value="recruit"
                                checked={reason === 'recruit'}
                                onChange={(e) => setReason(e.target.value)}
                                className="mr-2"
                            />
                            You want to recruit or hire me
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="thoughts"
                                checked={reason === 'thoughts'}
                                onChange={(e) => setReason(e.target.value)}
                                className="mr-2"
                            />
                            You'd like my thoughts on something
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="urgent"
                                checked={reason === 'urgent'}
                                onChange={(e) => setReason(e.target.value)}
                                className="mr-2"
                            />
                            You're trying to get in touch with me and it's urgent
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="other"
                                checked={reason === 'other'}
                                onChange={(e) => setReason(e.target.value)}
                                className="mr-2"
                            />
                            Something else
                        </label>
                    </div>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Your Message"
                        className="p-2 border border-white bg-gray-800 text-white rounded"
                        required
                    />
                    <button type="submit" className="bg-white text-black py-2 px-4 rounded">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default About;
