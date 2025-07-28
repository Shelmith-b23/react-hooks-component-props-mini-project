import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

// Sample data (you can replace this with real API later)
const blogName = "Overreacted";
const aboutText = "Personal blog by Dan Abramov. I explain with words and code.";
const aboutImage = "https://via.placeholder.com/215";

const posts = [
  {
    id: 1,
    title: "React and the Future",
    date: "July 25, 2025",
    preview: "Let’s talk about what’s coming in React and what’s going away.",
    minutes: 5,
  },
  {
    id: 2,
    title: "Understanding useEffect",
    date: "July 20, 2025",
    preview: "This post will help you understand the quirks of useEffect.",
    minutes: 12,
  },
  {
    id: 3,
    title: "Concurrent Mode Deep Dive",
    date: "July 18, 2025",
    preview: "A deep dive into Concurrent Mode in React.",
    minutes: 45,
  },
];

function App() {
  return (
    <div>
      <Header name={blogName} />
      <About about={aboutText} image={aboutImage} />
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;
