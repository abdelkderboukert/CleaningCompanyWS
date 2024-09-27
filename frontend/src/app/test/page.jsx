"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Basket from "../auti/Basket";

export default function test({children}) {
  return (
    // <div
    // //   onMouseLeave={() => handleSetSelected(null)}
    //   className="relative flex flex-row h-fit gap-2"
    // >
    //     {children}
    //     <Basket basket={[1,1,1,1,1,1,1,1,1]}/>
    //     <AnimatePresence>
    //         {1 && <Content dir={"l"} selected={3} />}
    //     </AnimatePresence>
    // </div>
    <About>
      <Basket basket={[1, 1, 1, 1, 1, 1, 1, 1, 1]} />
    </About>
  );
}

const About = ({children}) => {
    return (
      <div
        //   onMouseLeave={() => handleSetSelected(null)}
        className="relative flex flex-row h-fit gap-2"
      >
        {children}
        
        <AnimatePresence>
          {1 && <Content dir={"l"} selected={3} />}
        </AnimatePresence>
      </div>
    );
}

const Content = ({selected}) => {
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
      <Nub selected={selected} />
      <div className="bg-slate-100 h-full w-full"></div>
    </motion.div>
  );
};

const Bridge = () => (
  <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
);

const Nub = ({ selected }) => {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    moveNub();
  }, [selected]);

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById("overlay-content");

      if (!hoveredTab || !overlayContent) return;

      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();

      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

      setLeft(tabCenter);
    }
  };

  return (
    <motion.span
      style={{
        clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
      }}
    //   animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute right-3 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-600 bg-neutral-900"
    />
  );
};