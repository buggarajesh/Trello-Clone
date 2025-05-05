import React from "react";
import {
  Briefcase,
  Palette,
  GraduationCap,
  Code,
  Megaphone,
  ClipboardCheck,
  MapPin,
  Eye,
  Copy,
} from "lucide-react";

const featuredCategories = [
  { label: "Business", icon: <Briefcase />, color: "bg-blue-500" },
  { label: "Design", icon: <Palette />, color: "bg-rose-400" },
  { label: "Education", icon: <GraduationCap />, color: "bg-yellow-400" },
  { label: "Engineering", icon: <Code />, color: "bg-gray-400" },
  { label: "Marketing", icon: <Megaphone />, color: "bg-cyan-400" },
  { label: "Project Management", icon: <ClipboardCheck />, color: "bg-yellow-500" },
  { label: "Remote Work", icon: <MapPin />, color: "bg-blue-400" },
];

const notableTemplates = [
  {
    title: "New Hire Onboarding",
    author: "Trello Team",
    desc: "Help new employees start strong with this onboarding template.",
    views: "131.3K",
    copies: "18.3K",
    image: "https://images.unsplash.com/photo-1490079027102-cd08f2308c73?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyZWxsb3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Tier List",
    author: "Trello Engineering Team",
    desc:
      "Use this template to create a tier list for anything you want. A tier list is a way to rank items in a category from best to worst.",
    views: "23.3K",
    copies: "2.9K",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdYG_wbGeOXu4_Z5j1N2Zalw4jNPsr-MJo6A&s",
  },
  {
    title: "Better Work Habits Challenge",
    author: "Trello Team",
    desc:
      "Track, reflect, and celebrate new effective habits that you want to build at work.",
    views: "28K",
    copies: "3.1K",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGb3vp-4pznyynsxCEJXT-OqC_Kvy1EfLRGcKrTuD-nLV2_8QMW7icdpMSCJDnx88QTIA&usqp=CAU",
  },
];

const Templates = () => {
  return (
    <div className="bg-[#1D2125] text-white min-h-screen p-6">
      <h2 className="text-2xl font-semibold mb-6">Featured categories</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 mb-10">
        {featuredCategories.map((cat) => (
          <div
            key={cat.label}
            className={`rounded-md p-4 ${cat.color} flex flex-col items-center justify-center text-sm font-medium cursor-pointer hover:opacity-90`}
          >
            <div className="mb-2">{cat.icon}</div>
            <span>{cat.label}</span>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
        <span className="text-yellow-400">★</span>
        <span>New and notable templates</span>
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {notableTemplates.map((template) => (
          <div key={template.title} className="bg-[#2C2E32] rounded-md overflow-hidden">
            <img
              src={template.image}
              alt={template.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center space-x-2 mb-2">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/trello.svg"
                  alt="Trello logo"
                  className="w-6 h-6"
                />
              </div>
              <h3 className="font-semibold text-lg">{template.title}</h3>
              <p className="text-sm text-gray-400 mb-2">by {template.author}</p>
              <p className="text-sm text-gray-300 mb-4">{template.desc}</p>
              <div className="flex items-center space-x-4 text-xs text-gray-400">
                <span className="flex items-center space-x-1">
                  <Copy className="w-4 h-4" /> <span>{template.copies}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Eye className="w-4 h-4" /> <span>{template.views}</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;
