"use client";
import React from 'react'
import ShiftingDropDown from '@/app/auti/ShiftingDropDown';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Contentt from '@/app/auti/Content';
import Basket from '@/app/auti/Basket';

export default function page({ params }) {
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const storedBasket = sessionStorage.getItem("basket");
    if (storedBasket != null) {
      try {
        setBasket(JSON.parse(storedBasket));
      } catch (error) {
        console.error("Error parsing stored basket:", error);
      }
    }
  }, []);

  const handleAddToBasket = (id) => {
    const newBasket = [...basket, id];
    setBasket(newBasket);
    sessionStorage.setItem("basket", JSON.stringify(newBasket));
  };
  return (
    <div className="h-screen w-screen bg-neutral-900" content=" ">
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
        <Contentt basket={basket}>
          {/* <Basket basket={basket} /> */}
        </Contentt>
      </div>
    </div>
  );
}
