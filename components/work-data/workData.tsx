import React from "react";
import { BiLogoFigma } from "react-icons/bi";
import {
  SiPostgresql,
  SiPrisma,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import speedRent from "public/images/projects/speedRent.png";
import degusto from "public/images/projects/degusto.png";

const WorkData = () => [
  {
    number: "01",
    title: "SpeedRent",
    type: "Web App store",
    liveSite: "https://speed-rent-store.vercel.app/",
    githubSite: "https://github.com/TomaszM-dev/speedRent-store",
    info: "Introducing SpeedRent – Your Ultimate Vehicle Rental Solution! Rent a vehicle on your terms, whether its for a day or a month, and experience the convenience of secure payments via Stripe",

    tech: [
      <BiLogoFigma key="1" />,
      <SiTypescript key="2" />,
      <TbBrandNextjs key="3" />,
      <SiTailwindcss key="4" />,
      <SiStripe key="5" />,
    ],

    picture: speedRent,
  },
  {
    number: "02",
    title: "DegustoVR",
    liveSite: "https://degusto-ts.vercel.app/",
    githubSite: "https://github.com/TomaszM-dev/degustoTs",
    type: "Web App store",
    info: "DegustoVR is online store fully compatible with stripe payments, you can create your own account add items to cart, place an order.",
    tech: [
      <BiLogoFigma key="1" />,
      <SiTypescript key="2" />,
      <TbBrandNextjs key="3" />,
      <SiTailwindcss key="4" />,
      <SiStripe key="5" />,
      <SiPrisma key="6" />,
      <SiPostgresql key="6" />,
    ],
    picture: degusto,
  },
];

export default WorkData;
