"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import ButtonRM from "./ButtonRM";
import { FiMapPin } from "react-icons/fi";
import ShiftingDropDown from "./ShiftingDropDown";
import { useState } from "react";
// import AnimatedListDemo from "./animatedListe";

export default function HomePage() {
  const [Gelori, setGelori] = useState(false)
  const [plants, setPlants] = useState([
    { name: "Rose", price: 10099, image: "https://picsum.photos/200/300" },
    { name: "Lily", price: 899, image: "https://picsum.photos/200/301" },
    { name: "Sunflower", price: 1299, image: "https://picsum.photos/200/302" },
    { name: "Daisy", price: 999, image: "https://picsum.photos/200/303" },
    { name: "Tulip", price: 1199, image: "https://picsum.photos/200/304" },
    { name: "Violet", price: 799, image: "https://picsum.photos/200/305" },
    { name: "Poppy", price: 1049, image: "https://picsum.photos/200/306" },
    { name: "Orchid", price: 1599, image: "https://picsum.photos/200/307" },
    { name: "Carnation", price: 949, image: "https://picsum.photos/200/308" },
    { name: "Peony", price: 1249, image: "https://picsum.photos/200/309" },
    { name: "Hydrangea", price: 1499, image: "https://picsum.photos/200/310" },
    { name: "Iris", price: 1099, image: "https://picsum.photos/200/311" },
    { name: "Lavender", price: 849, image: "https://picsum.photos/200/312" },
    { name: "Snapdragon", price: 1149, image: "https://picsum.photos/200/313" },
    { name: "Gerbera", price: 1299, image: "https://picsum.photos/200/314" },
    {
      name: "Alstroemeria",
      price: 1099,
      image: "https://picsum.photos/200/315",
    },
    {
      name: "Baby's Breath",
      price: 999,
      image: "https://picsum.photos/200/316",
    },
    {
      name: "Queen Anne's Lace",
      price: 899,
      image: "https://picsum.photos/200/317",
    },
    { name: "Daffodil", price: 1199, image: "https://picsum.photos/200/318" },
    { name: "Calla Lily", price: 1499, image: "https://picsum.photos/200/319" },
    { name: "Gladiolus", price: 1299, image: "https://picsum.photos/200/320" },
  ]);
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
      <ListProd plants={plants}/>
      <Schedule />
    </>
  );
}

const Schedule = () => {
  return (
    <section
      id="launch-schedule"
      className="mx-auto max-w-5xl px-4 py-48 text-white"
    >
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-20 text-4xl font-black uppercase text-zinc-50"
      >
        Launch Schedule
      </motion.h1>
      <ScheduleItem title="NG-21" date="Dec 9th" location="Florida" />
      <ScheduleItem title="Starlink" date="Dec 20th" location="Texas" />
      <ScheduleItem title="Starlink" date="Jan 13th" location="Florida" />
      <ScheduleItem title="Turksat 6A" date="Feb 22nd" location="Florida" />
      <ScheduleItem title="NROL-186" date="Mar 1st" location="California" />
      <ScheduleItem title="GOES-U" date="Mar 8th" location="California" />
      <ScheduleItem title="ASTRA 1P" date="Apr 8th" location="Texas" />
    </section>
  );
};

const ScheduleItem = ({ title, date, location }) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
    >
      <div>
        <p className="mb-1.5 text-xl text-zinc-50">{title}</p>
        <p className="text-sm uppercase text-zinc-500">{date}</p>
      </div>
      <div className="flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500">
        <p>{location}</p>
        <FiMapPin />
      </div>
    </motion.div>
  );
};

const ListProd = ({plants}) => {
  const [hovered, setHovered] = useState(null)
  const handleMouseEnter = (index) => {
    setHovered(index);
    console.log(index,hovered)
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
        className="flex justify-center items-center lg:text-3xl"
      >
        plants <span className="text-xs">({plants.length})</span>
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
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 17, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ duration: 0.75 }}
                  className="relative z-50 bg-black h-full w-full rounded-l-3xl"
                ></motion.div>
              ) : (
                <div></div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
      {/* <ButtonRM>
          <Link href="/attendance" className="h-full w-full select-none">
            Attendance
          </Link>
        </ButtonRM> */}
    </motion.section>
  );
};