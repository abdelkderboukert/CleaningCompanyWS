import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Contentt({ children, basket }) {
  const [isHovred, setIsHovred] = useState(false)
  return (
    <div
      onMouseEnter={() => setIsHovred(true)}
      onMouseLeave={() => setIsHovred(false)}
      className=" absolute flex flex-row h-fit gap-2 w-8 top-0 right-0 text-3xl lg:text-4xl text-white"
    >
      {children}

      <AnimatePresence>
        {isHovred && <Content basket={basket} />}
      </AnimatePresence>
    </div>
  );
}

const Content = ({ basket }) => {
  const [basket1,setBasket1] = useState([])
  useEffect(() => {
    fetch(`http://localhost:8000/api/plant/?ids=${basket.join(",")}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => 
        // setBasket1((basket1) => [...basket1, ...data])
        setBasket1(data)
      )
      .catch((error) => console.error(error));
  }, [basket]);
  console.table(basket1)
  return (
    <motion.div
      id="overlay-content"
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 8,
      }}
      className="absolute right-0 top-[calc(100%_+_65px)] w-[calc(100%_-_24px)] sm:w-96 rounded-lg border border-neutral-600 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800 p-4 mx-3"
    >
      <Bridge />
      <Nub />
      {basket1.map((b) => (
        <div key={b.index} className=" w-full h-10 text-white">
          {b.id}
        </div>
      ))}
    </motion.div>
  );
};

const Bridge = () => (
  <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
);

const Nub = ({}) => {
  return (
    <motion.span
      style={{
        clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
      }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute right-3 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-600 bg-neutral-900"
    />
  );
};
