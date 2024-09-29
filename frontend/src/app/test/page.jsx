"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Basket from "../auti/Basket";

export default function test({children}) {
  let a=1
  const add =() => {
    
    a++;
    console.log(a)
  }
  console.log(a)
  return (
    <div>
      {a}
      <button onClick={() => add()}>gg</button>
    </div>
  );
}