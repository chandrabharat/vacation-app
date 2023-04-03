import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "Home" },
  { id: 2, href: "#about", text: "About" },
  { id: 3, href: "#services", text: "Services" },
  { id: 4, href: "#tours", text: "Tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", fabClassName: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", fabClassName: "fab fa-twitter" },
  {
    id: 3,
    href: "https://www.squarespace.com",
    fabClassName: "fab fa-squarespace",
  },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    text: "saving money",
    subText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    text: "endless hiking",
    subText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    text: "amazing comfort",
    subText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    title: "Tibet Adventure",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "China",
    days: 6,
    quote: 2100,
    img: tour1,
    date: "October 16th 2023",
  },

  {
    id: 2,
    title: "Best of Java",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "Indonesia",
    days: 11,
    quote: 1400,
    img: tour2,
    date: "December 1st 2023",
  },

  {
    id: 3,
    title: "Explore Hong Kong",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "hong kong",
    days: 8,
    quote: 5000,
    img: tour3,
    date: "January 10th 2024",
  },

  {
    id: 4,
    title: "Kenya Highlights",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "Kenya",
    days: 20,
    quote: 3300,
    img: tour4,
    date: "Feburary 21st 2024",
  },
];
