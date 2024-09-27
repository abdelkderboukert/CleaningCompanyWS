"use client";
import React from "react";
import Schedule from "../auti/Schedule";
import { motion } from "framer-motion";
import Link from "next/link";
import ButtonRM from "../auti/ButtonRM";
import { FiShoppingBag, FiMoreVertical } from "react-icons/fi";
import { useState, useEffect } from "react";
import ShiftingDropDown from "../auti/ShiftingDropDown";
import axios from "axios";

export default function page() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/categories/")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const storedBasket = sessionStorage.getItem("basket");
    if (storedBasket != null) {
      setBasket(JSON.parse(storedBasket));
    }
  }, []);

  const handleAddToBasket = (id) => {
    setBasket((basket) => [...basket, id]);
    localStorage.setItem("basket", JSON.stringify(basket));
    console.log(JSON.parse(sessionStorage.getItem("basket")));
  };

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
          </div>
        </div>
      </motion.div>
      {categories.map((category) => (
        <>
          <ListProd
            key={category.category.id}
            id={category.category.id}
            title={category.category.name}
            plants={category.plants}
            handleAddToBasket={handleAddToBasket}
          />
        </>
      ))}
      <Schedule />
    </>
  );
}

const ListProd = ({ title, plants, id, handleAddToBasket }) => {
  const [hovered, setHovered] = useState(null);
  const [basket, setBasket] = useState([]);
  const handleMouseEnter = (index) => {
    setHovered(index);
  };
  console.log(basket);
  console.log(basket);
  const handleClick = (id) => {
    window.location.href = `/shope/${id}`;
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
                backgroundImage: `http://localhost:8000${plant.photo}`,
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
                    <button
                      className="flex bg-black w-full h-10 rounded-tl-xl justify-center items-center"
                      onClick={() => handleAddToBasket(plant.id)}
                    >
                      <FiShoppingBag />
                    </button>
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
      <div className="flex h-14 p-1">
        <ButtonRM>
          <button onClick={() => handleClick(id)}>Go to Page 2</button>
        </ButtonRM>
      </div>
    </motion.section>
  );
};
