"use client";
import React from "react";
import Schedule from "../auti/Schedule";
import { motion } from "framer-motion";
import Link from "next/link";
import ButtonRM from "../auti/ButtonRM";
import { FiShoppingBag, FiMoreVertical } from "react-icons/fi";
import { useState } from "react";
import ShiftingDropDown from "../auti/ShiftingDropDown";

export default function page() {
  const [plants, setPlants] = useState([
    {
      name: "Rose",
      price: 10099,
      image: "https://picsum.photos/200/300",
      description:
        "A classic and timeless choice, roses are a symbol of love and beauty.A classic and timeless choice, roses are a symbol of love and beauty.A classic and timeless choice, roses are a symbol of love and beauty.A classic and timeless choice, roses are a symbol of love and beauty.A classic and timeless choice, roses are a symbol of love and beauty.A classic and timeless choice, roses are a symbol of love and beauty.",
    },
    {
      name: "Lily",
      price: 899,
      image: "https://picsum.photos/200/301",
      description:
        "Lilies are known for their elegant and trumpet-shaped flowers, symbolizing purity and innocence.",
    },
    {
      name: "Sunflower",
      price: 1299,
      image: "https://picsum.photos/200/302",
      description:
        "Sunflowers are bright and cheerful, representing warmth and happiness.",
    },
    {
      name: "Daisy",
      price: 999,
      image: "https://picsum.photos/200/303",
      description:
        "Daisies are a classic and simple flower, symbolizing innocence and new beginnings.",
    },
    {
      name: "Tulip",
      price: 1199,
      image: "https://picsum.photos/200/304",
      description:
        "Tulips are a vibrant and cup-shaped flower, representing love and passion.",
    },
    {
      name: "Violet",
      price: 799,
      image: "https://picsum.photos/200/305",
      description:
        "Violets are small and delicate, symbolizing modesty and humility.",
    },
    {
      name: "Poppy",
      price: 1049,
      image: "https://picsum.photos/200/306",
      description:
        "Poppies are a bright and delicate flower, representing creativity and imagination.",
    },
    {
      name: "Orchid",
      price: 1599,
      image: "https://picsum.photos/200/307",
      description:
        "Orchids are exotic and elegant, symbolizing luxury and beauty.",
    },
    {
      name: "Carnation",
      price: 949,
      image: "https://picsum.photos/200/308",
      description:
        "Carnations are a long-lasting and fragrant flower, representing love and fascination.",
    },
    {
      name: "Peony",
      price: 1249,
      image: "https://picsum.photos/200/309",
      description:
        "Peonies are lush and full-bodied, symbolizing good fortune and prosperity.",
    },
    {
      name: "Hydrangea",
      price: 1499,
      image: "https://picsum.photos/200/310",
      description:
        "Hydrangeas are big and showy, representing heartfelt emotions and gratitude.",
    },
    {
      name: "Iris",
      price: 1099,
      image: "https://picsum.photos/200/311",
      description:
        "Iris flowers are elegant and slender, symbolizing faith and wisdom.",
    },
    {
      name: "Lavender",
      price: 849,
      image: "https://picsum.photos/200/312",
      description:
        "Lavender is a calming and soothing flower, representing peace and serenity.",
    },
    {
      name: "Snapdragon",
      price: 1149,
      image: "https://picsum.photos/200/313",
      description:
        "Snapdragons are tall and colorful, symbolizing strength and courage.",
    },
    {
      name: "Gerbera",
      price: 1299,
      image: "https://picsum.photos/200/314",
      description:
        "Gerbera daisies are bright and cheerful, representing happiness and innocence.",
    },
    {
      name: "Alstroemeria",
      price: 1099,
      image: "https://picsum.photos/200/315",
      description:
        "Alstroemeria flowers are long-lasting and fragrant, symbolizing friendship and devotion.",
    },
    {
      name: "Baby's Breath",
      price: 999,
      image: "https://picsum.photos/200/316",
      description:
        "Baby's Breath is a delicate and airy flower, representing everlasting love and innocence.",
    },
    {
      name: "Queen Anne's Lace",
      price: 899,
      image: "https://picsum.photos/200/317",
      description:
        "Queen Anne's Lace is a lacy and delicate flower, symbolizing romance and nostalgia.",
    },
    {
      name: "Daffodil",
      price: 1199,
      image: "https://picsum.photos/200/318",
      description:
        "Daffodils are bright and trumpet-shaped, representing new beginnings and renewal.",
    },
    {
      name: "Calla Lily",
      price: 1499,
      image: "https://picsum.photos/200/319",
      description:
        "Calla Lilies are elegant and sophisticated, symbolizing beauty and elegance.",
    },
    {
      name: "Gladiolus",
      price: 1299,
      image: "https://picsum.photos/200/320",
      description:
        "Gladiolus flowers are tall and stately, representing strength and moral integrity.",
    },
  ]);
  const [basket, setBasket] = useState([]);
  return (
    <>
      <motion.div
        initial={{ y: 48, opacity: 0, marginTop: 48 }}
        whileInView={{ y: 0, opacity: 1, marginTop: 0 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="h-dvh w-dvw p-5"
      >
        <div className=" relative flex  flex-col h-full w-full bg-p1 rounded-3xl ">
          <div className=" w-full max-h-14">
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
          </div>
          <div className="flex flex-col h-full w-full p-10">
            <div className="flex w-max h-max mt-6 justify-center select-none items-center mx-auto playwrite-pe-f1 text-2xl sm:text-5xl lg:text-7xl text-white">
              EURL KAHIBL TCE
            </div>
            <div className="flex w-3/5 h-max mt-5 justify-center items-center mx-auto select-none text-zinc-600 text-center">
              just some bla bla bla about the company and how is the contene or
              the service that he giv , i just try some word to check if i can
              do it{" "}
            </div>
            {/* <ButtonRM>
              <Link href="/attendance" className="h-full w-full select-none">
                Attendance
              </Link>
            </ButtonRM> */}
          </div>
        </div>
        {/* <AnimatedListDemo/> */}
      </motion.div>
      <ListProd title="plants" plants={plants} />
      <ListProd title="plants1" plants={plants} />
      <ListProd title="plants2" plants={plants} />
      <Schedule />
    </>
  );
}

const ListProd = ({ title, plants }) => {
  const [hovered, setHovered] = useState(null);
  const handleMouseEnter = (index) => {
    setHovered(index);
    console.log(index, hovered);
  };

  const handleClick = () => {
    localStorage.setItem("data", JSON.stringify(plants));
    localStorage.setItem("title", JSON.stringify(title));
    window.location.href = "/moreabout";
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
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
      className="h-max w-screen bg-black flex-row "
      content=" "
    >
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
        className="h-max w-screen p-10 gap-5 grid-flow-row grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 bg-black"
        content=" "
      >
        {plants.slice(0, 8).map((plant, index) => (
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
      <div>
        <h1>Page 1</h1>
        <button onClick={handleClick}>Go to Page 2</button>
      </div>
    </motion.section>
  );
};
