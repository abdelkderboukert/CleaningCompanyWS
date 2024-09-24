"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiShoppingBag, FiMoreVertical } from "react-icons/fi";
import ShiftingDropDown from "../auti/ShiftingDropDown";
import { useEffect } from "react";
import { useState } from "react";
import Schedule from "../auti/Schedule";

export default function page() {
  const [plants, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [basket, setBasket] = useState([]);

  basket.length != 0? console.log("is done") : console.log("isnote");

  useEffect(() => {
    const storedData = localStorage.getItem("data");
    const storedTitle = localStorage.getItem("title");
    if (storedData && storedTitle) {
      setData(JSON.parse(storedData));
      setTitle(JSON.parse(storedTitle));
    }
  }, []);

  const [hovered, setHovered] = useState(null);
  const handleMouseEnter = (index) => {
    setHovered(index);
    console.log(index, hovered);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <>
      <motion.section
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.25,
            },
          },
        }}
        initial="hidden"
        animate="show"
        className="h-max w-screen bg-neutral-900 flex-row "
        content=" "
      >
        <div className=" w-full max-h-14 mb-4">
          <motion.div
            className="mx-auto h-14 w-1/2 bg-black rounded-b-3xl justify-start p-8 text-neutral-200 md:justify-center"
            initial={{ width: 0 }}
            animate={{ width: "50%" }}
            transition={{ duration: 1 }}
          >
            <ShiftingDropDown />
          </motion.div>
          <motion.div
            className=" absolute h-5 w-5 top-0 bg-transparent rounded-tr-3xl"
            style={{
              marginLeft: "calc( 25% - 20px )",
              boxShadow: "5.5px -5.5px black",
            }}
            initial={{ marginLeft: "calc( 50% - 20px )" }}
            animate={{ marginLeft: "calc( 25% - 20px )" }}
            transition={{ duration: 1 }}
          />
          <motion.div
            className=" absolute h-5 w-5 top-0 bg-transparent rounded-tl-3xl"
            style={{
              marginLeft: "75%",
              boxShadow: "-6px -6px black",
            }}
            initial={{ marginLeft: "calc( 50% - 20px )" }}
            animate={{ marginLeft: "calc( 75% )" }}
            transition={{ duration: 1 }}
          />
          <div className="absolute h-8 w-8 top-0 right-0 m-5 text-3xl lg:text-4xl text-white">
            <FiShoppingBag />
            {basket.length != 0 ? (
                <div className="absolute h-3/4 w-3/4 -top-4 -right-4 m-2 text-xl p-auto lg:text-xl text-white bg-red-700 rounded-full">
                  <span className="flex h-full w-full justify-center items-center">
                    {basket.length}
                  </span>
                </div>
                
              ) : (
                <></>
              )}
          </div>
          {/* <div className="absolute h-8 w-8 top-0 right-0 m-5 text-3xl lg:text-4xl text-white">
            <FiShoppingBag />
            <div className="absolute h-3/4 w-3/4 -top-4 -right-4 m-2 text-xl p-auto lg:text-xl text-white bg-red-700 rounded-full">
              <span className="flex h-full w-full justify-center items-center">1</span>
            </div>
          </div> */}
        </div>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.25,
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          content=" "
          className="flex justify-center items-center playwrite-pe-f1 text-3xl sm:text-4xl lg:text-5xl text-green-500"
        >
          {title} <span className="text-xs">({plants.length})</span>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.25,
              },
            },
          }}
          initial="hidden"
          animate="show"
          className="h-max w-screen p-10 gap-5 grid-flow-row grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 bg-neutral-900"
          content=" "
        >
          {plants.map((plant, index) => (
            <motion.div
              variants={{
                hidden: { y: 48, opacity: 0 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    staggerChildren: 0.25,
                  },
                },
              }}
              onAnimationComplete={() => {
                const span = document.querySelector(
                  `[data-plant-index="${index}"]`
                );
                span.animate({ x: 0, opacity: 1 });
              }}
              className="h-[350px] w-full "
              key={index}
              whileHover={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <motion.div
                className="flex  rounded-3xl bg-white h-full overflow-hidden shadow-xl shadow-black"
                whileHover={{ scale: 1.1 }}
                style={{
                  backgroundImage: `url(${plant.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <motion.span
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.75 }}
                  data-plant-index={index}
                  className="mt-auto text-white select-none ml-4 mb-4 "
                >
                  {plant.name} <br />{" "}
                  <span className="text-neutral-700 text-3xl">
                    {plant.price} Da
                  </span>{" "}
                </motion.span>
                {index == hovered ? (
                  <>
                    <motion.div
                      initial={{ x: 300, opacity: 0 }}
                      animate={{ x: 17, opacity: 1 }}
                      exit={{ x: 100, opacity: 0 }}
                      transition={{ duration: 1 }}
                      className=" mt-5 gird h-1/2 w-20 gap-2 grid-flow-row flex-row "
                    >
                      <div className="flex bg-black w-full h-10 rounded-tl-xl justify-center items-center">
                        <FiShoppingBag />
                      </div>
                      <div className="flex bg-black w-full h-10 justify-center items-center">
                        <FiMoreVertical />
                      </div>
                      <div className="flex bg-black w-full h-10 rounded-bl-xl justify-center items-center">
                        3
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ x: 100, opacity: 1 }}
                      animate={{ x: 17, opacity: 1 }}
                      exit={{ x: 100, opacity: 0 }}
                      transition={{ duration: 0.75 }}
                      className="flex z-50 text-white p-2 pr-5 overflow-auto bg-black h-full w-full rounded-l-3xl"
                    >
                      description:
                      <br />
                      <br />
                      {plant.description}
                    </motion.div>
                  </>
                ) : (
                  <></>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
      <Schedule />
    </>
  );
}
