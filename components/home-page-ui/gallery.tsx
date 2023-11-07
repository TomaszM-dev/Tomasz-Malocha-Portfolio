import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Example = () => {
  return (
    <div className="">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 0.8], ["-50%", "0%"]);
  const height = useTransform(scrollYProgress, [0, 0.8], [50, 0]);

  return (
    <section
      ref={targetRef}
      className="relative h-[60rem]   z-10 mx-auto  mt-10 pt-[3rem]   xl:mt-[0rem]bg-[#ffffff] overflow-hidden"
    >
      <div className="relative top-0 left-0 flex  items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
      <motion.div
        style={{ height }}
        className="bg-red relative mt-[10rem] h-96 "
      >
        <div className="h-[1550%] max-lg:h-[1200%] max-sm:h-[680%] w-[120%] absolute left-[-10%] circle z-3 shadow-black  bg-white"></div>
      </motion.div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative xl:h-[350px] xl:w-[430px] h-[265px] w-[300px] overflow-hidden bg-[#f0efef] "
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className=" absolute inset-6 z-0 transition-transform duration-300 group-hover:scale-110 "
      ></div>
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
