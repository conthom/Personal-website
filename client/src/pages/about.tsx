import Head from "next/head";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const About = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [reason, setReason] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Running on the browser?", typeof window !== "undefined");
    console.log("User:", process.env.EMAIL_USER ? "✅ Loaded" : "❌ Missing");
    console.log("Pass:", process.env.EMAIL_PASS ? "✅ Loaded" : "❌ Missing");
    // Check if all fields are filled
    if (!name || !email || !message || !reason) {
      alert("Please fill out all the fields");
      return;
    }

    const formData = {
      name,
      email,
      reason,
      message,
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert("Your message has been sent!");
      } else {
        console.log(data);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  useEffect(() => {
    if (router.asPath.includes("#scrollbottom")) {
      console.log("Effect ran");
      setTimeout(() => {
        console.log("Scrolling now");
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      }, 150);
    }
  }, [router.asPath]); // This effect will now run when the router path changes

  return (
    <div className="min-h-screen bg-gray-700 scroll-smooth">
      <Head>
        <title>Connor Thompson</title>
        <link rel="icon" href="/connor logo.png" />
      </Head>
      <div className="pt-24 px-4 md:px-10 pb-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h1
              className="text-center text-4xl mb-4 text-white"
              style={{ fontFamily: "Times New Roman, Times, serif" }}
            >
              About Me
            </h1>
            <div className="text-white">
              <p className="text-lg">
                Hi, I'm <b>Connor Thompson</b>,
                <br />a Computer Science student at{" "}
                <a
                  href="https://www.indiana.edu/"
                  className="text-blue-400 underline"
                >
                  Indiana University Bloomington
                </a>
                , specializing in software engineering to expand my real-world
                problem-solving skills.
              </p>
              <p className="text-lg mt-5 mb-5">More things about me:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  I'm seeking internship opportunities to develop my experience
                  in the tech field.
                </li>
                <li>
                  I'm involved with the{" "}
                  <a
                    href="https://www.navigators.org/"
                    className="text-blue-400 underline"
                  >
                    Navigators
                  </a>{" "}
                  (a Christian organization on campus) and occasionally the
                  Chess Club at IU.
                </li>
                <li>
                  In my free time, I enjoy a good audiobook, running, video
                  games, and music.
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 rounded-lg p-6 max-w-md mx-auto">
            <h2 className="text-3xl mb-4 text-white">Contact Me</h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="p-2 border border-white bg-gray-700 text-white rounded"
                required
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="p-2 border border-white bg-gray-700 text-white rounded"
                required
              />
              <div className="flex flex-col space-y-2 text-white">
                <label className="text-lg">What's up?</label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value="recruit"
                    checked={reason === "recruit"}
                    onChange={(e) => setReason(e.target.value)}
                  />
                  <span>You want to recruit or hire me</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value="thoughts"
                    checked={reason === "thoughts"}
                    onChange={(e) => setReason(e.target.value)}
                  />
                  <span>You'd like my thoughts on something</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value="urgent"
                    checked={reason === "urgent"}
                    onChange={(e) => setReason(e.target.value)}
                  />
                  <span>
                    You're trying to get in touch with me and it's urgent
                  </span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value="other"
                    checked={reason === "other"}
                    onChange={(e) => setReason(e.target.value)}
                  />
                  <span>Something else</span>
                </label>
              </div>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message"
                className="p-2 border border-white bg-gray-700 text-white rounded"
                required
                rows={4}
              />
              <button
                type="submit"
                className="bg-white text-black py-2 px-4 rounded hover:bg-gray-200 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
