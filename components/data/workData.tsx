import React from "react";
import {
  BiLineChart,
  BiLogoFigma,
  BiLogoJavascript,
  BiLogoReact,
} from "react-icons/bi";
import {
  SiFigma,
  SiHtml5,
  SiPostgresql,
  SiPrisma,
  SiSass,
  SiStripe,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandMongodb, TbBrandNextjs } from "react-icons/tb";
import speedRent from "public/images/projects/speedRent.png";
import degusto from "public/images/projects/degusto.png";
import admin from "public/images/projects/admin.png";
import bdesign from "public/images/projects/bdesign.png";
import buma from "public/images/projects/buma.png";
import vikbro from "public/images/projects/vikbro.png";
import crypto from "public/images/projects/crypto.png";
import { BsFiletypeSql } from "react-icons/bs";

const WorkData = () => [
  {
    number: "01",
    filter: "application",
    title: "SpeedRent",
    type: "Web App store",
    liveSite: "https://speed-rent-store.vercel.app/",
    githubSite: "https://github.com/TomaszM-dev/speedRent-store",
    info: "My coolest project yet is a website where you can rent cars, just like in real life. All the info on the site comes from the SpeedRental admin dashboard. You can pick a vehicle that's ready to roll, choose how long you want it, and pay for that time. Plus, I added lots of fun animations to make it cool! 🚗✨ ",

    tech: [
      <SiFigma key="1" />,
      <SiTypescript key="2" />,
      <TbBrandNextjs key="3" />,
      <SiTailwindcss key="4" />,
      <SiStripe key="5" />,
    ],

    picture: speedRent,
  },
  {
    number: "02",
    filter: "application",

    title: "DegustoVR",
    liveSite: "https://degusto-ts.vercel.app/",
    githubSite: "https://github.com/TomaszM-dev/degustoTs",
    type: "Web App store",
    info: "My one of the best projects. DegustoVR is a website that gets products straight from Stripe, so everything you see is what's available. I added a way for you to sign up using your details or Google Account. Once you're logged in, you can place orders. But even if you're not logged in, you can still explore all the cool stuff I made. With Stripe Elements, you can pay for everything on the site without going anywhere else. The cart system is handy too – you can add and remove stuff while you shop. 🛒💳",
    tech: [
      <SiFigma key="1" />,
      <SiTypescript key="2" />,
      <TbBrandNextjs key="3" />,
      <SiTailwindcss key="4" />,
      <SiStripe key="5" />,
      <SiPrisma key="6" />,
      <SiPostgresql key="6" />,
    ],
    picture: degusto,
  },
  {
    number: "03",
    filter: "application",

    title: "SpeedRent Admin Dashboard",
    liveSite: "https://speed-rent-admin-panel.vercel.app/",
    githubSite: "https://github.com/TomaszM-dev/speedRent-admin-panel",
    type: "Web App store",
    info: "With Antonio's help from 'Code with Antonio' I made a tool for SpeedRent: admin dashboard. You can add categories, products, types, brands, pick horsepower for vehicles. It's super simple to add new stuff, and see your added products on the SpeedRent store. They pop up because they are fetched from the dashboard's API. Antonio's videos were my guide; without them, I couldn't have done it. Thanks ",
    tech: [
      <SiFigma key="1" />,
      <SiTailwindcss key="2" />,
      <TbBrandNextjs key="3" />,
      <BsFiletypeSql key="4" />,
      <SiTypescript key="6" />,
      <SiPrisma key="7" />,
    ],
    picture: admin,
  },
  {
    number: "04",
    filter: "application",

    title: "B-Design",
    liveSite: "https://b-designed.vercel.app/",
    githubSite: "https://github.com/TomaszM-dev/b-designed",
    type: "Web App store",
    info: "The project that provided the most growth for me is B Designed. It is a website where you can create a user account using Google or your own details. Once signed in, you can buy our products, write blog posts, and manage your posts. You can also add or remove items from the cart, pay for them, and track your posts and orders in your user dashboard. The website boasts a sleek design. I used MongoDB, Next.js, Tailwind CSS, and TypeScript to make it happen. 🌐🛍️",
    tech: [
      <SiFigma key="1" />,
      <SiTailwindcss key="2" />,
      <TbBrandNextjs key="3" />,
      <TbBrandMongodb key="4" />,
      <BiLogoFigma key="5" />,
      <SiTypescript key="6" />,
    ],
    picture: bdesign,
  },
  {
    number: "05",
    filter: "landing",

    title: "Buma AS",
    liveSite: "https://buma-as-website.vercel.app/",
    githubSite: "https://github.com/TomaszM-dev/BumaAs-website",
    type: "Landing Page",
    info: "I initially created it to contribute to my ex-boss's firm, but back then, my skills weren't as polished as they are now (I've improved a lot in those 7 months). I couldn't fully complete the project, so I left it, focusing mainly on the design side. Despite my limited experience, I believe the functionality of the site was quite good, even though I had just started using React.js. I keep it in my portfolio because it reminds me that the journey is what matters most. It's not just about where you end up but all the things you learn and how you grow along the way.  ",
    tech: [
      <SiFigma key="1" />,
      <BiLogoReact key="2" />,
      <SiStyledcomponents key="3" />,
    ],
    picture: buma,
  },
  {
    number: "06",
    filter: "application",

    title: "CryptoBank",
    liveSite: "https://crypto-banking-fin.vercel.app/",
    githubSite: "https://github.com/TomaszM-dev/CryptoBanking-",
    type: "Web application",
    info: "Unfortunately, the API I used got too expensive. Even though it's my second project, I'm sentimental about it 🥲. I might update it soon. I'm keeping it in my portfolio because it shows my journey as a developer. You can see how I've improved from this project to my latest ones just by looking at the first page 👀🤪. CryptoBank was a website where you could make your own account, handled your expenses, checked the latest prices of currency pairs you're interested in, and even play a gamble game. 🌐💸",
    tech: [
      <SiSass key="1" />,
      <BiLineChart key="1" />,
      <BiLogoJavascript key="1" />,
      <SiHtml5 key="1" />,
    ],
    picture: crypto,
  },
  {
    number: "07",
    filter: "landing",

    title: "Vikbro",
    liveSite: "https://vikbro.vercel.app/",
    githubSite: "https://github.com/TomaszM-dev/Vikbro-client-website",
    type: "Landing Page",
    info: "My very first big project! I designed a landing page for my friend's company, and I'm pretty proud of it, especially considering it's my first baby 🤪 I used HTML, CSS, and JS to craft a design.",
    tech: [
      <SiSass key="1" />,
      <BiLogoJavascript key="1" />,
      <SiHtml5 key="1" />,
    ],
    picture: vikbro,
  },
];

export default WorkData;
