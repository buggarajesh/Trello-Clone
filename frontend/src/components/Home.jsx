import React, { useState } from "react";
import Footer from "./Footer"; // Adjust the path if Footer is in another folder

const testimonials = [
  {
    quote:
      "[Trello is] great for simplifying complex processes. As a manager, I can chunk [processes] down into bite-sized pieces for my team and then delegate that out, but still keep a bird's-eye view.",
    name: "Joey Rosenberg",
    role: "Global Leadership Director at Women Who Code",
    blogLink: "https://www.atlassian.com/blog",
    surveyLink: "#",
    stat:
      "75% of organizations report that Trello delivers value to their business within 30 days.",
  },
  {
    quote:
      "Whether someone is in the office, working from home, or working on-site with a client, everyone can share context and information through Trello.",
    name: "Sumeet Moghe",
    role: "Product Manager at ThoughtWorks",
    blogLink: "https://www.atlassian.com/customers/thoughtworks",
    surveyLink: "#",
    stat: "81% of customers chose Trello for its ease of use.",
  },
];

export default function Home() {
  const [selectedTab, setSelectedTab] = useState("inbox");
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const content = {
    inbox: {
      title: "Inbox",
      text: "When it’s on your mind, it goes in your Inbox. Capture your to-dos from anywhere, anytime.",
      image: "/indbox.png",
    },
    board: {
      title: "Boards",
      text: "Your to-do list may be long, but it can be manageable! Keep tabs on everything from 'to-dos to tackle' to 'mission accomplished!'",
      image: "/person.png",
    },
    planner: {
      title: "Planner",
      text: "Drag, drop, get it done. Snap your top tasks into your calendar and make time for what truly matters.",
      image: "/planner.png",
    },
  };

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);
  const t = testimonials[current];

  return (
    <div className="font-sans text-[#172B4D]">
      {/* Hero Section */}
      <section className="bg-white pt-20 pb-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="max-w-xl text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Capture, organize, and tackle your to-dos from anywhere.
            </h1>
            <p className="text-lg mb-6">
              Discover the clearer and more confident way to manage your productivity with Trello.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-3 rounded-md border w-full sm:w-72"
              />
              <button className="bg-[#0C66E4] text-white px-6 py-3 rounded-md font-semibold">
                Sign up – it's free!
              </button>
            </div>
            <a href="#" className="text-[#0C66E4] text-sm mt-4 inline-block underline">
              Watch video
            </a>
          </div>
          <video
            src="/n20-hero-cropped2.mov"
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-md mt-10 lg:mt-0 rounded-xl shadow-lg"
          ></video>
        </div>
      </section>

      {/* Productivity Section */}
      <section className="bg-[#F4F5F7] py-20 px-4 lg:px-10">
        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1 max-w-xl">
            <h2 className="text-3xl font-bold mb-4">Your productivity powerhouse</h2>
            <p className="text-lg mb-10">
              Stay organized and efficient with Inbox, Boards, and Planner. Every to-do, idea, or responsibility—no matter how small—finds its place.
            </p>
            <div className="space-y-4">
              {Object.entries(content).map(([key, value]) => (
                <div
                  key={key}
                  onClick={() => setSelectedTab(key)}
                  className={`p-4 rounded-lg cursor-pointer border-l-4 transition ${
                    selectedTab === key
                      ? "bg-white border-[#0C66E4]"
                      : "bg-transparent border-transparent hover:bg-white"
                  }`}
                >
                  <h3 className="text-lg font-semibold">{value.title}</h3>
                  <p className="text-sm mt-1">{value.text}</p>
                  {key === "planner" && (
                    <span className="text-xs text-white bg-[#00C7E5] px-2 py-1 rounded mt-2 inline-block">
                      COMING SOON
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <img
              src={content[selectedTab].image}
              alt={content[selectedTab].title}
              className="rounded-xl shadow-md w-full max-w-xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Messaging Section */}
      <section className="bg-[#0052CC] pt-7 pb-20 px-4 lg:px-15">
        <div className="max-w-5xl mx-auto text-center text-white mb-16">
          <h2 className="text-3xl font-bold">From massage to action</h2>
          <p className="mt-4 text-lg">
            Quickly turn communication from your favorite apps into to-dos,<br />
            keeping all your discussions and tasks organized in one place.
          </p>
        </div>
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-4 md:p-7 mb-7 flex flex-col lg:flex-row items-center gap-4">
          <img src="/massage1.png" alt="Deep Tissue Massage" className="w-30 h-60 object-cover rounded-lg mx-auto" />
          <div className="lg:w-1/2 text-left">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Deep Tissue Massage</h3>
            <p className="text-gray-700">
              A deep tissue massage focuses on realigning deeper layers of muscles and connective tissue...
            </p>
          </div>
        </div>
      </section>
      <div className="max-w-3xl mx-auto relative -mt-20 z-10 bg-white rounded-xl shadow-md p-4 md:p-10 flex flex-col lg:flex-row-reverse items-center gap-8">
        <img src="/massage%202.png" alt="Relaxation Massage" className="w-30 h-60 object-cover rounded-lg mx-auto" />
        <div className="lg:w-1/2 text-left">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Relaxation Massage</h3>
          <p className="text-gray-700">
            A gentle Swedish‑style massage using smooth, gliding strokes to help you unwind...
          </p>
        </div>
      </div>

      {/* Features Section */}
      <section className="bg-[#F4F5F7] py-20 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold text-gray-500 uppercase mb-2">WORK SMARTER</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#172B4D] mb-4">Do more with Trello</h2>
          <p className="text-base md:text-lg text-gray-700 mb-12 max-w-3xl">
            Customize the way you organize with easy integrations, automation, and mirroring...
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards... */}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-white px-4 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto relative">
          <div className="flex flex-col lg:flex-row border rounded-xl shadow-md overflow-hidden transition-all duration-500">
            <div className="w-full lg:w-2/3 p-8 lg:p-12 flex flex-col justify-between">
              <p className="text-xl text-[#091E42] leading-relaxed mb-10">{t.quote}</p>
              <div className="mt-4">
                <div className="w-36 h-[1px] bg-[#091E42] mb-4"></div>
                <p className="font-semibold text-[#091E42]">{t.name}</p>
                <p className="text-sm text-[#44546F]">{t.role}</p>
                <a href={t.blogLink} target="_blank" rel="noopener noreferrer" className="text-sm text-[#0C66E4] underline font-medium mt-4 inline-block">
                  Read the story
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/3 bg-[#0052CC] text-white p-8 lg:p-12 flex flex-col justify-center">
              <p className="text-2xl font-bold leading-snug mb-6">{t.stat}</p>
              <a href={t.surveyLink} className="text-sm underline font-medium">
                Trello TechValidate Survey
              </a>
            </div>
          </div>
          <div className="absolute top-4 right-4 flex items-center space-x-3">
            <button onClick={prev} className="bg-gray-100 hover:bg-gray-200 text-gray-600 p-2 rounded-full">&#8592;</button>
            <div className="flex gap-1">
              {testimonials.map((_, index) => (
                <span key={index} className={`h-2 w-2 rounded-full ${index === current ? "bg-gray-800" : "bg-gray-300"}`}></span>
              ))}
            </div>
            <button onClick={next} className="bg-gray-100 hover:bg-gray-200 text-gray-600 p-2 rounded-full">&#8594;</button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-white py-16 px-6 text-center">
        <p className="text-lg text-[#172B4D] font-medium mb-8">
          Join a community of millions of users globally who are using Trello to get more done.
        </p>
        <div className="flex justify-center mb-16">
          <img src="/logo.png" alt="Company Logos" className="max-w-full h-12 object-contain" />
        </div>
        <div className="bg-[#F4F5F7] py-14 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#172B4D] mb-6">
            Get started with Trello today
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-3 w-full sm:w-auto flex-1 rounded-md border border-gray-300 focus:outline-none"
            />
            <button className="bg-[#0C66E4] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#0747A6] transition">
              Sign up – it's free!
            </button>
          </div>
          <p className="text-sm text-[#5E6C84] mt-4">
            By entering my email, I acknowledge the{" "}
            <a
              href="https://www.atlassian.com/legal/privacy-policy"
              className="text-[#0C66E4] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Atlassian Privacy Policy
            </a>
          </p>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
