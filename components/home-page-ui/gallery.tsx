import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Example = () => {
  return (
    <div className="bg-black">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "3000px"],
  });

  const x = useTransform(scrollYProgress, [0, 0.4], ["10%", "-60%"]);

  return (
    <section
      ref={targetRef}
      className="relative h-[60vh] mt-[0rem]  bg-[#ffffff]"
    >
      <div className="relative top-0 flex h-[50vh]  items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[300px] w-[300px] overflow-hidden bg-[#dfdfdf]"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className=" absolute inset-0 rounded-lg z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-5 text-2xl rounded-xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Example;

type CardsType = {
  card: [];
};

const cards = [
  {
    url: "/images/gallery/1.png",
    title: "SpeedRent",
    id: 1,
  },
  {
    url: "/images/gallery/2.png",
    title: "DegustoVR",
    id: 3,
  },
  {
    url: "/images/gallery/3.png",
    title: "B-designed",
    id: 2,
  },
  {
    url: "/images/gallery/4.png",
    title: "Buma As",
    id: 4,
  },
  {
    url: "/images/gallery/6.png",
    title: "CryptoBank",
    id: 6,
  },
  {
    url: "/images/gallery/1.png",
    title: "SpeedRent",
    id: 7,
  },
  {
    url: "/images/gallery/2.png",
    title: "DegustoVR",
    id: 8,
  },
  {
    url: "/images/gallery/3.png",
    title: "B-designed",
    id: 9,
  },
  {
    url: "/images/gallery/4.png",
    title: "Buma As",
    id: 10,
  },
  {
    url: "/images/gallery/6.png",
    title: "CryptoBank",
    id: 11,
  },
  {
    url: "/images/gallery/7.png",
    title: "Vikbro",
    id: 12,
  },
];
