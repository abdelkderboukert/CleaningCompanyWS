"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

export default function Contentt({ children }) {
    let basket=[3,3]
  const [isHovred, setIsHovred] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovred(true)}
      onMouseLeave={() => setIsHovred(false)}
      className="absolute flex flex-row h-fit w-full gap-2 top-0 right-0 text-3xl lg:text-4xl text-white"
    >
      {children}

      <AnimatePresence>
        {isHovred && <Content basket={basket} />}
      </AnimatePresence>
    </div>
  );
}

const Content = ({ basket }) => {
  const [basket1, setBasket1] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8000/api/plant/?ids=${basket.join(",")}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setBasket1(data))
      .catch((error) => console.error(error));
  }, [basket]);
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
      className="absolute right-0 top-[calc(100%_+_65px)] w-[calc(100%_-_24px)] sm:w-96 rounded-lg border border-neutral-600 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800 p-4 mx-3 max-h-[calc(100dvh_-_100px)] overflow-auto"
    >
      <Bridge />
      <Nub />
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-20 font-black uppercase playwrite-pe-f1 text-2xll lg:text-4xl text-white"
      >
        <b>Your Basket</b>
      </motion.h1>
      {basket1.map((b) => (
        <ScheduleItem key={b.index} plant={b} />
      ))}
    </motion.div>
  );
};

const Bridge = () => (
  <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
);

const Nub = () => {
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

const ScheduleItem = ({ plant }) => {
  const [x, setX] = useState(0);

  const handleMouseMove = (e) => {
    setX(e.clientX);
  };

  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
      onMouseMove={handleMouseMove}
      style={{ x }}
    >
      <div>
        <p className="mb-1.5 text-xl text-zinc-50">{plant.name}</p>
        <p className="text-sm uppercase text-zinc-500">
          {plant.description.slice(0, 25)}....
        </p>
      </div>
      <div className="flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500">
        <p>{plant.price}DA</p>
        <Link href="/shope/[id]" as={`/shope/${plant.category}/${plant.id}`}>
          <FiArrowRight />
        </Link>
      </div>
    </motion.div>
  );
};
