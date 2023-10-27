import Page from "@/components/page";
import Preloader from "@/components/preloader";
import { AnimatePresence } from "framer-motion";
import { resolve } from "path";
import { useEffect, useMemo, useState } from "react";

export default function Home() {
  const [loading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
      console.log(locomotiveScroll);

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);
  return (
    <Page>
      <div className="h-[200vh] flex justify-between flex-col">
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1 data-scroll data-scroll-speed="0.6">
          Home
        </h1>
        <p data-scroll data-scroll-speed="0.6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          quod totam hic repellendus iure atque cupiditate aspernatur sunt
          debitis, repudiandae animi modi rerum ab quibusdam perspiciatis ad,
          autem non minus impedit natus doloremque. Earum dolorum culpa
          consequatur, rerum temporibus id nam harum est asperiores quia
          officiis aliquam libero quibusdam soluta minima mollitia facere unde
          illum aspernatur quas? Iste id ut atque debitis perferendis soluta.
          Suscipit impedit explicabo architecto neque eaque provident odio quos
          adipisci commodi perferendis harum optio, voluptatem exercitationem
          accusamus cum saepe eos ipsa. Eos facere repellendus, ea assumenda
          reiciendis explicabo autem cupiditate porro rem quae magni? Dolorum,
          nam.
        </p>
      </div>
    </Page>
  );
}
