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
  return (
    <>
      <motion.div
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
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
      <section className="h-screen w-screen bg-black flex p-10 " content=" ">
        <motion.div
          className=" relative h-full w-max bg-slate-600"
          initial={{ position: "relative" }}
          animate={
            Gelori
              ? { display: "flex", flexDirection: "row", position: "static" }
              : { position: "relative" } //{ display: "flex", flexDirection: "row", position: "static" }
          }
          transition={{ duration: 5 }}
          onClick={() => {
            setGelori(!Gelori);
            console.log(Gelori);
          }}
        >
          {/* {!Gelori && ( */}

          <motion.div
            initial={{ top: 40, left: 40, position: "absolute" }}
            animate={
              !Gelori
                ? { display: "flex", position: "static" }
                : { top: 40, left: 40, position: "absolute" }
            }
            transition={{ duration: 5 }}
            className="flex h-60 w-40 rounded-3xl bg-red-600"
          ></motion.div>
          <motion.div
            initial={{ top: 80, left: 96, position: "absolute" }}
            animate={
              !Gelori
                ? { display: "flex", position: "static" }
                : { top: 80, left: 96, position: "absolute" }
            }
            transition={{ duration: 5 }}
            className="flex h-60 w-40 rounded-3xl bg-green-600"
          ></motion.div>
          <motion.div
            initial={{ top: 112, left: 16, position: "absolute" }}
            animate={
              !Gelori
                ? { display: "flex", position: "static" }
                : { top: 112, left: 16, position: "absolute" }
            }
            transition={{ duration: 5 }}
            className=" h-60 w-40 rounded-3xl bg-amber-400"
          ></motion.div>

          {/* )} */}
        </motion.div>
      </section>
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