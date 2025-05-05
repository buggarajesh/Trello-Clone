import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#091E42] text-white py-10 px-6 lg:px-20 text-sm">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          {/* Logo and Login */}
          <div>
            <img src="/logo.png" alt="Trello" className="h-8 mb-4" />
            <p className="text-gray-400 cursor-pointer hover:underline">Log in</p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1">
            <div>
              <h4 className="font-semibold mb-2">About Trello</h4>
              <ul className="text-gray-400 space-y-1">
                <li><a href="#" className="hover:underline">What’s behind Trello</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Jobs</h4>
              <ul className="text-gray-400 space-y-1">
                <li><a href="#" className="hover:underline">Learn more and apply</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Apps</h4>
              <ul className="text-gray-400 space-y-1">
                <li><a href="#" className="hover:underline">Download the desktop app</a></li>
                <li><a href="#" className="hover:underline">Download the mobile app</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Contact us</h4>
              <ul className="text-gray-400 space-y-1">
                <li><a href="#" className="hover:underline">Send us your questions and feedback</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400">
          <div className="flex items-center flex-wrap gap-4">
            <span>🌐 English</span>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms</a>
            <span>&copy; {new Date().getFullYear()} Atlassian</span>
          </div>

          <div className="flex gap-4 text-white text-lg">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
