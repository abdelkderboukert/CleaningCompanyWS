import React from 'react'
import { FiShoppingBag } from "react-icons/fi";
import { motion } from 'framer-motion';
import { useState } from 'react';
export default function Basket({basket}) {
  return (
    <motion.div
      className="absolute h-8 w-8 top-0 right-0 m-5 text-3xl lg:text-4xl text-white"
    >
      <FiShoppingBag />
      {basket.length != 0 ? (
        <>
          <motion.div className="absolute h-3/4 w-3/4 -top-4 -right-4 m-2 text-xl p-auto lg:text-xl text-white bg-red-700 rounded-full">
            <span className="flex h-full w-full justify-center items-center">
              {basket.length}
            </span>
          </motion.div>
        </>
      ) : (
        <></>
      )}
    </motion.div>
  );
}
