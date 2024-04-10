import { Button } from "./button";
import { motion } from "framer-motion";

export default function Home() {
  const staggerVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <main className="w-full h-[500px]">
      <motion.div
        variants={staggerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col px-5 items-center mt-32"
      >
        <motion.h2 variants={itemVariants} className="font-bold text-xl">
          GROW YOUR BUSINESS IN A WEEK
        </motion.h2>
        <motion.h1
          variants={itemVariants}
          className="md:text-5xl text-[44px] line font-semibold"
        >
          Grow Your Business
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-gray-500 font-semibold text-lg my-3"
        >
          We help small businesses with how to grow correctly
          <br /> in the right path and help them make more money
        </motion.p>
        <Button className="w-full md:w-64">Start now</Button>
      </motion.div>
    </main>
  );
}
