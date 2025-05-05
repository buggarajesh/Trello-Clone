import React from "react";
import { useNavigate } from "react-router-dom";

// Shared CTA section (right side of all dropdowns)
const CTASection = () => (
  <div className="w-1/4 border-l border-gray-300 pl-6">
    <h4 className="text-[#091e42] font-semibold text-sm mb-2">Meet Trello</h4>
    <p className="text-xs text-[#5e6c84] mb-4">
      Trello makes it easy for your team to get work done. No matter the
      project, workflow, or type of team, Trello can help keep things organized.
      It’s simple – sign-up, create a board, and you’re off!
    </p>
    <button className="text-[#0052cc] text-sm border border-[#0052cc] rounded px-3 py-1 font-semibold hover:bg-[#e6f0ff]">
      Check out Trello
    </button>
  </div>
);

// Reusable mega dropdown
const MegaDropdown = ({ items }) => (
  <div className="absolute left-0 mt-2 w-[900px] bg-white shadow-2xl rounded-lg border border-gray-200 hidden group-hover:flex z-50 p-6 gap-10">
    <div className="grid grid-cols-3 gap-6 w-3/4">
      {items.map((item, i) => (
        <div key={i} className="flex gap-3">
          <div className="text-lg">{item.icon}</div>
          <div>
            <h5 className="text-sm font-semibold text-[#091e42] mb-1">{item.title}</h5>
            <p className="text-xs text-[#5e6c84]">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
    <CTASection />
  </div>
);

// Dropdown trigger
const Dropdown = ({ title, items }) => (
  <div className="relative group">
    <button className="text-sm text-[#172b4d] font-semibold px-2 py-1 hover:text-[#0052cc] flex items-center gap-1">
      {title}
      <svg className="w-5 h-3 fill-current" viewBox="0 0 20 20">
        <path d="M5.25 7.25L10 12.25L14.75 7.25H5.25Z" />
      </svg>
    </button>
    <MegaDropdown items={items} />
  </div>
);

const Navbar = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignUp = () =>{
    navigate("/signup");
  }
  
  const handleHome = () => {
    navigate("/");
  }

  return (
    <nav className="bg-white border-b border-gray-200 w-full font-sans">
      <div className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left Side */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="https://cdn.worldvectorlogo.com/logos/trello.svg"
              alt="Trello"
              onClick={handleHome}
              className="w-6 h-6"
            />
            <span className="text-[#172b4d] font-bold text-lg">Trello</span>
          </div>

          {/* Dropdowns */}
          <Dropdown
            title="Features"
            items={[
              {
                icon: "📥",
                title: "Inbox",
                description: "Capture every vital detail from emails, Slack, and more directly into your Trello Inbox.",
              },
              {
                icon: "📅",
                title: "Planner",
                description: "Sync your calendar and allocate focused time slots to boost productivity.",
              },
              {
                icon: "⚡",
                title: "Automation",
                description: "Automate tasks and workflows with Butler automation.",
              },
              {
                icon: "🔌",
                title: "Power-Ups",
                description: "Power up your teams by linking their favorite tools with Trello plugins.",
              },
              {
                icon: "📋",
                title: "Templates",
                description: "Blueprints for success with easy-to-use templates from industry leaders.",
              },
              {
                icon: "🔗",
                title: "Integrations",
                description: "Discover ways to integrate tools and enhance productivity.",
              },
            ]}
          />

          <Dropdown
            title="Solutions"
            items={[
              {
                icon: "🧑‍💻",
                title: "Engineering",
                description: "Track bugs, manage code and ship features faster with Trello.",
              },
              {
                icon: "🎨",
                title: "Design",
                description: "Organize design sprints and creative projects with Trello boards.",
              },
              {
                icon: "📦",
                title: "Product Management",
                description: "Plan product roadmaps and prioritize backlogs easily.",
              },
              {
                icon: "📣",
                title: "Marketing",
                description: "Run campaigns, manage content calendars and collaborate with teams.",
              },
              {
                icon: "🗂️",
                title: "Project Management",
                description: "Keep projects on track and deliver on time using visual workflows.",
              },
              {
                icon: "🏠",
                title: "Remote Work",
                description: "Empower remote teams with clear task ownership and visibility.",
              },
            ]}
          />

          <Dropdown
            title="Plans"
            items={[
              {
                icon: "🆓",
                title: "Free",
                description: "Basic boards and cards to get started quickly.",
              },
              {
                icon: "📊",
                title: "Standard",
                description: "For small teams needing more functionality and automation.",
              },
              {
                icon: "💼",
                title: "Premium",
                description: "Advanced tools for teams to plan and track work at scale.",
              },
              {
                icon: "🏢",
                title: "Enterprise",
                description: "Best-in-class security, controls, and support for enterprises.",
              },
            ]}
          />
          <a
            href="#"
            className="text-sm text-[#172b4d] font-semibold hover:text-[#0052cc]"
          >
            Pricing
          </a>

          <Dropdown
            title="Resources"
            items={[
              {
                icon: "❓",
                title: "Help",
                description: "Browse FAQs and how-tos to get the most out of Trello.",
              },
              {
                icon: "📰",
                title: "Blog",
                description: "Insights, tips, and productivity stories from Trello and beyond.",
              },
              {
                icon: "👥",
                title: "Community",
                description: "Connect with other Trello users, ask questions, and share ideas.",
              },
              {
                icon: "💻",
                title: "Developers",
                description: "Explore the Trello API and learn how to build custom apps.",
              },
              {
                icon: "🎥",
                title: "Webinars",
                description: "Live and on-demand sessions to sharpen your Trello skills.",
              },
              {
                icon: "📱",
                title: "Apps",
                description: "Get Trello on your mobile or desktop device.",
              },
            ]}
          />

          
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleLoginClick} 
            className="text-sm font-semibold text-[#172b4d] hover:underline">
            Log in
          </button>
          <button
          onClick={handleSignUp} 
            className="bg-[#0052cc] text-white text-sm font-semibold px-4 py-2 rounded hover:bg-[#0747a6]">
            Get Trello for free
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
