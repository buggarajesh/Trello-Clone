import React from "react";
import { useNavigate } from "react-router-dom";
import trelloLogo from "../assets/trello-logo.svg"; // Add Trello logo
import googleLogo from "../assets/google.png";
import microsoftLogo from "../assets/microsoft.png";
import appleLogo from "../assets/apple.png";
import slackLogo from "../assets/slack.png";
import illustrationright from "../assets/illustrationright.png";
import illustrationleft from "../assets/illustrationleft.png";
// import { useAuth } from "./AuthContext";

const Login = () => {

    const navigate = useNavigate();
    // const { login} = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/dashboard")
    };

  return (
    <div className="min-h-screen bg-[#f4f5f7] flex flex-col items-center justify-center px-4 relative pt-5">
      {/* Background illustrations (optional image left/right) */}
      <img
        src={illustrationleft}
        alt="Left Illustration"
        className="hidden md:block absolute bottom-0 left-0 w-48"
      />
      <img
        src={illustrationright}
        alt="Right Illustration"
        className="hidden md:block absolute bottom-0 right-0 w-48"
      />

      <div className="bg-white shadow-lg rounded-md px-6 py-8 w-full max-w-md z-10">
        <div className="flex flex-col items-center mb-6">
          <img src={trelloLogo} alt="Trello" className="h-14 mb-2" />
          <h2 className="text-xl font-semibold text-gray-800">Log in to continue</h2>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <div className="flex items-center space-x-2 text-sm">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember" className="text-gray-700">Remember me</label>
            <span className="text-gray-400 cursor-pointer" title="Keep me signed in">ℹ️</span>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition"
          >
            Continue
          </button>
        </form>

        <div className="my-4 text-center text-sm text-gray-600">Or continue with:</div>

        {/* Social logins */}
        <div className="space-y-3">
          {[
            { label: "Google", logo: googleLogo },
            { label: "Microsoft", logo: microsoftLogo },
            { label: "Apple", logo: appleLogo },
            { label: "Slack", logo: slackLogo },
          ].map(({ label, logo }) => (
            <button
              key={label}
              className="w-full flex items-center justify-center border border-gray-300 rounded-md py-2 hover:bg-gray-100 transition"
            >
              <img src={logo} alt={label} className="w-5 h-5 mr-2" />
              <span className="text-sm text-gray-800 font-medium">{label}</span>
            </button>
          ))}
        </div>

        <div className="text-center mt-6 text-sm text-blue-600 space-x-2">
          <a href="#" className="hover:underline">Can't log in?</a>
          <span className="text-gray-400">•</span>
          <a href="#" className="hover:underline">Create an account</a>
        </div>

        {/* Footer */}
        <hr className="my-6" />
        <div className="text-center text-xs text-gray-500">
          <p className="font-semibold tracking-wider mb-1">ⓒ ATLASSIAN</p>
          <p>
            One account for Trello, Jira, Confluence and{" "}
            <a href="#" className="text-blue-600 underline">
              more
            </a>.
          </p>
          <p className="mt-1">
            This site is protected by reCAPTCHA and the Google{" "}
            <a href="#" className="text-blue-600 underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 underline">
              Terms of Service
            </a>{" "}
            apply.
          </p>
        </div>
      </div>
    </div> 
  );
};

export default Login;
