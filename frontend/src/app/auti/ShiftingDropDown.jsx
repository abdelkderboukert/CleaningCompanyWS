"use client";
import React, { useEffect, useState } from "react";
import {
  FiArrowRight,
  FiBarChart2,
  FiChevronDown,
  FiHome,
  FiShoppingBag,
  FiPieChart,
  FiCheck,
  FiTable,
  FiList,
  FiDollarSign
} from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const ShiftingDropDown = () => {
  return (
    <motion.div className="flex h-full w-full justify-start items-center text-neutral-200 md:justify-center"initial={{opacity:0}} animate={{opacity:1}} transition={{duration:4}}>
      <Tabs />
      {/* <AllTabs /> */}
    </motion.div>
  );
};

const Tabs = () => {
  const [selected, setSelected] = useState(null);
  const [dir, setDir] = useState(null);

  const handleSetSelected = (val) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }

    setSelected(val);
  };

  return (
    <div
      onMouseLeave={() => handleSetSelected(null)}
      className="relative flex flex-row h-fit gap-2"
    >
      {TABS.map((t) => {
        return (
          <Tab
            key={t.id}
            selected={selected}
            handleSetSelected={handleSetSelected}
            tab={t.id}
          >
            {t.title}
          </Tab>
        );
      })}

      <AnimatePresence>
        {selected && <Content dir={dir} selected={selected} />}
      </AnimatePresence>
    </div>
  );
};

const Tab = ({ children, tab, handleSetSelected, selected }) => {
  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => handleSetSelected(tab)}
      className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors ${
        selected === tab
          ? " bg-neutral-800 text-neutral-100"
          : "text-neutral-400"
      }`}
    >
      <span>{children}</span>
      <FiChevronDown
        className={`transition-transform ${
          selected === tab ? "rotate-180" : ""
        }`}
      />
    </button>
  );
};

const Content = ({ selected, dir }) => {
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
      className="absolute left-0 top-[calc(100%_+_24px)] w-96 rounded-lg border border-neutral-600 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800 p-4"
    >
      <Bridge />
      <Nub selected={selected} />

      {TABS.map((t) => {
        return (
          <div className="overflow-hidden" key={t.id}>
            {selected === t.id && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <t.Component />
              </motion.div>
            )}
          </div>
        );
      })}
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
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-600 bg-neutral-900"
    />
  );
};

const Products = () => {
  const [cards, setCards] = useState([]);
  // DEFAULT_CARDS

  // useEffect(() => {
  //   fetch("http://localhost:8000/api/todo/")
  //     .then((response) => response.json())
  //     .then((data) => {setCards(data)});
  // }, []);

  return (
    <div>
      <div className="flex gap-4">
        <div>
          <h3 className="mb-2 text-sm font-medium">Backlog</h3>
          {cards
            .filter((card) => card.column === "backlog")
            .slice(-3)
            .map((card) => (
              <div key={card.id}>{card.title}</div>
            ))}
        </div>
        <div>
          <h3 className="mb-2 text-sm font-medium">Todo</h3>
          {cards
            .filter((card) => card.column === "todo")
            .slice(-3)
            .map((card) => (
              <div key={card.id}>{card.title}</div>
            ))}
        </div>
        <div>
          <h3 className="mb-2 text-sm font-medium">In progress</h3>
          {cards
            .filter((card) => card.column === "doing")
            .slice(-3)
            .map((card) => (
              <div key={card.id}>{card.title}</div>
            ))}
        </div>
      </div>

      <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-green-800">
        <Link href="todotask">View more</Link>
        <FiArrowRight />
      </button>
    </div>
  );
};

const Pricing = () => {
  return (
    <div className="grid grid-cols-3 gap-4 divide-x divide-neutral-700">
      <div className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50">
        <FiHome className="mb-2 text-xl text-green-800" />
        <Link href="/">
          <span className="text-xs">Home</span>
        </Link>
      </div>
      <div
        href="todotask"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FiCheck className="mb-2 text-xl text-green-800" />
        <Link href="/todotask">Todo</Link>
      </div>
      <div className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50">
        <FiShoppingBag className="mb-2 text-xl text-green-800" />
        <Link href="/shope">
          <span className="text-xs">shope</span>
        </Link>
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2">
        <a href="#">
          <img
            className="mb-2 h-14 w-full rounded object-cover"
            src="/imgs/blog/4.png"
            alt="Placeholder image"
          />
          <h4 className="mb-0.5 text-sm font-medium">As cleaning company</h4>
          <p className="text-xs text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo
            quidem eos.
          </p>
        </a>
        <a href="#">
          <img
            className="mb-2 h-14 w-full rounded object-cover"
            src="/imgs/blog/5.png"
            alt="Placeholder image"
          />
          <h4 className="mb-0.5 text-sm font-medium">AS papinyar on ling</h4>
          <p className="text-xs text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo
            quidem eos.
          </p>
        </a>
      </div>
      <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-green-800">
        {/* text-indigo-300 */}
        <span>View more</span>
        <FiArrowRight />
      </button>
    </div>
  );
};

const AllTabs = () => {
  return <div>
    <Tabs/>
  </div>;
};

const TABS = [
  {
    title: "Products",
    Component: Products,
  },
  {
    title: "Monu",
    Component: Pricing,
  },
  {
    title: "About Us",
    Component: Blog,
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));

export default ShiftingDropDown;
