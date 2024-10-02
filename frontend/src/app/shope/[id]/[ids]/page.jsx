"use client";
import React from "react";
import ShiftingDropDown from "@/app/auti/ShiftingDropDown";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Contentt from "@/app/auti/Content";
import ButtonRM from "@/app/auti/ButtonRM";

export default function Page({ params }) {
  const [basket, setBasket] = useState([]);
  const [plant, setPlant] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/api/plant/?ids=${params.ids}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) =>
        // setBasket1((basket1) => [...basket1, ...data])
        setPlant(data[0])
      )
      .catch((error) => console.error(error));
  }, []);
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
    const storedBasket = sessionStorage.getItem("basket");
    const newBasket = storedBasket ? [...JSON.parse(storedBasket), id] : [id];
    setBasket(newBasket);
    sessionStorage.setItem("basket", JSON.stringify(newBasket));
  };
  return (
    <div className="h-max w-screen bg-neutral-900" content=" ">
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
        <Contentt basket={basket}>{/* <Basket basket={basket} /> */}</Contentt>
      </div>
      <section className="h-screen w-screen p-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div
          className="sm:col-span-1 bg-yellow-400 h-full gap-3 rounded-3xl shadow-xl shadow-black"
          style={{
            backgroundImage: `http://localhost:8000${plant.photo}`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div class="flex flex-col sm:col-span-2 min-h-full h-max p-5">
          <h1 className="text-4xl lg:text-7xl w-full">{plant.name}</h1>
          <span className="text-sm text-zinc-500">prix: {plant.price}</span>
          <span className="text-sm text-zinc-500">
            category: {plant.category}
          </span>
          <br />
          <br />
          <span className="text-xl sm:text-3xl">{plant.description}</span>
          <div className="flex mt-auto ml-auto">
            <ButtonRM>
              <button
                className="disabled"
                onClick={() => handleAddToBasket(plant.id)}
              >
                add to basket
              </button>
            </ButtonRM>
          </div>
        </div>
      </section>
    </div>
  );
}
