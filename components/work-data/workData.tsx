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
    info: "Introducing SpeedRent – Your Ultimate Vehicle Rental Solution! Rent a vehicle on your terms, whether its for a day or a month, and experience the convenience of secure payments via Stripe",

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
    info: "DegustoVR is online store fully compatible with stripe payments, you can create your own account add items to cart, place an order.",
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
    info: "In this admin panel , you have the tools to create and customize stores effortlessly, manage product catalogs, add new products, update existing ones, and organize them into categories and types and track revenue.",
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
    info: " B-Designed is online store and also website where you can post something, you can create your own account add items to cart, place an order, write a blog post.",
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
    info: " This landing page was made for my client company based in norway, we are waiting still for images and content of the website but it is nearly ready",
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
    info: "CryptoBank is website where you can create your own account, manage your expenses check latest prices of pair of currencies that you are interersted about, play game",
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
    info: "This website presents their work as a carpenters, you can see their latest project and also get to know their company better",
    tech: [
      <SiSass key="1" />,
      <BiLogoJavascript key="1" />,
      <SiHtml5 key="1" />,
    ],
    picture: vikbro,
  },
];

export default WorkData;
