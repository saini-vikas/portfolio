import React, { useRef, forwardRef, useContext } from "react";
import { ThemeContext } from "../MainContainer";

const acedamic_projects = [
  {
    title: "E-Commerce Website",
    description:
      "A dynamic MERN (MongoDB, Express.js, React, Node.js) stack eCommerce website project, leveraging Material-UI (MUI) for sleek and responsive design. This project seamlessly integrates Redux for robust state management, ensuring an efficient and scalable application. Enjoy the power of MongoDB for flexible data storage, Express.js for streamlined server-side development, React for a dynamic and user-friendly front end, and Node.js for a fast and scalable backend. Elevate your online shopping experience with a modern, feature-rich platform, combining the strengths of MERN, MUI, and Redux for a seamless and visually appealing e-commerce solution.",
    stack: ["Node.js", "React.js", "Express.js", "MongoDB", "Redux", "MUI"],
    completion: 20,
    date: new Date("2023-06-07"),
  },
  {
    title: "Expense Tracking App",
    description:
      "An Expense Tracking App, seamlessly blending Express.js for a robust backend, React for an intuitive frontend, and SQLite3 for seamless data storage. Empower users to log daily expenses, categorize expenditures, and gain insightful perspectives through monthly and annual summaries. The incorporation of Charts.js enhances visualization, providing users with clear graphical representations of their financial trends. This versatile app ensures a user-friendly experience while fostering effective budget tracking, making it an invaluable tool for personal financial management.",
    stack: ["Node.js", "React.js", "Express.js", "Charts.js", "SQlite3"],
    completion: 100,
    date: new Date("2023-05-02"),
  },
  {
    title: "Search Engine",
    description:
      "A Node.js and Express.js-powered search engine, seamlessly integrating MongoDB for efficient data storage. Leveraging the capabilities of crawler.js and Cheerio, the system autonomously crawls fruit and book websites, extracting valuable data stored in MongoDB. Users can initiate searches, receiving prompt responses featuring matching results and relevant URLs. The incorporation of Bootstrap ensures a visually appealing and responsive user interface, enhancing the overall search experience. This project harmoniously combines web crawling technology, database management, and user-friendly design to deliver a powerful and versatile search engine for diverse information retrieval needs.",
    stack: [
      "Node.js",
      "Express.js",
      "Crawler.js",
      "MongoDB",
      "Elasticlunr",
      "Cheerio",
      "Bootstrap",
    ],
    completion: 100,
    date: new Date("2023-11-05"),
  },
  {
    title: "Movies Database",
    description:
      "A Movies Database App using Python, meticulously crafted on the Django framework. This IMDb-inspired platform offers comprehensive movie details, including actors, directors, runtime, release date, and more. Users can curate a personalized watchlist, add reviews, and engage in discussions, while administrators wield the power to manage movie data. The app prioritizes user security with authentication, enabling seamless sign-in and signup. Users can also fine-tune their profiles and review information. Elevating the experience, the app employs recommendation algorithms like user-based and item-based collaborative filtering for personalized movie suggestions, all backed by SQLite3 for robust data management via Django models.",
    stack: ["Django", "SQlite3", "Bootstrap"],
    completion: 100,
    date: new Date("2022-06-23"),
  },
  {
    title: "Profolio Website",
    description:
      "This is my portfolio website project crafted with React and Bootstrap, showcasing my educational journey, diverse skill set, impactful projects, and convenient contact information. This visually appealing platform offers a glimpse into my professional expertise and accomplishments, providing an engaging and informative experience for visitors. Dive into a curated display of my skills and projects, underscoring my commitment to excellence and innovation in the realm of web development.",
    stack: ["React.js", "Bootstrap", "CSS"],
    completion: 100,
    date: new Date("2023-05-12"),
  },
  {
    title: "Weather App-ios",
    description:
      "This is an iOS Weather App, meticulously crafted using Swift and SwiftUI. Seamlessly accessing a weather API, the app provides precise forecasts for the current location, while offering users the flexibility to explore weather conditions in any city by simply searching names. The intuitive design of SwiftUI ensures a visually appealing interface, enhancing the overall user experience. Stay informed with accurate and up-to-date weather data, whether at home or around the globe. This project encapsulates the seamless integration of Swift, SwiftUI, and external APIs to deliver a user-friendly and informative weather application for iOS.",
    stack: ["Swift", "SwiftUI", "Weather-API"],
    completion: 100,
    date: new Date("2021-05-12"),
  },
  {
    title: "Electronics Store",
    descripttion:
      "A Java-based digital commerce Electronic Store App, skillfully developed using JavaFX for a user-friendly interface. Embracing the principles of Object-Oriented Programming, the app features a well-structured hierarchy of classes and subclasses for efficient product management. The intuitive UI elegantly displays the inventory, shopping cart, cart items, recent purchases, and total store revenue. Experience seamless navigation as you explore a rich inventory of electronic products, add items to your cart, and track purchases, all encapsulated within a robust OOP design and visually appealing JavaFX interface.",
    stack: ["Java", "JavaFX", "OOP"],
    completion: 100,
    date: new Date("2019-10-12"),
  },
];

const Projects = forwardRef((props, refs) => {
  const darkTheme = useContext(ThemeContext);
  const style = {
    tagLine: {
      color: darkTheme ? "#ACBCFF" : "#4C4C6D",
    },
  };
  return (
    <div className="project-container">
      <div className="contact-heading">
        <h1 className="contact-heading-title" style={style.tagLine}>
          Projects
        </h1>
        <p className="contact-tagline" style={style.tagLine}>
          {props.tagline}
        </p>
      </div>
    </div>
  );
});

export default Projects;
