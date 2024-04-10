import { motion as m } from "framer-motion";
import data from "@/assets/data.png";

const Data = () => {
  const textVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <main className="w-full md:h-[220px] md:rounded-lg overflow-hidden bg-primary text-background py-6 px-4">
      <div className="grid md:grid-cols-2 grid-cols-1 md:items-center">
        <m.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="w-full ml-16 mb-4"
        >
          <m.img src={data} className="w-48" alt="Data" />
        </m.div>
        <m.div
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          className="ml-6"
        >
          <h1 className="text-2xl font-semibold text-gray-200">
            <m.span variants={wordVariants}>We</m.span>{" "}
            <m.span variants={wordVariants}>Provide</m.span>{" "}
            <m.span variants={wordVariants}>Wide</m.span>{" "}
            <m.span variants={wordVariants}>Range</m.span>{" "}
            <m.span variants={wordVariants}>Of</m.span>{" "}
            <m.span variants={wordVariants}>Database</m.span>{" "}
            <m.span variants={wordVariants}>With</m.span>{" "}
            <m.span variants={wordVariants}>Mentors</m.span>{" "}
            <m.span variants={wordVariants}>Helping</m.span>{" "}
            <m.span variants={wordVariants}>You</m.span>{" "}
            <m.span variants={wordVariants}>All</m.span>{" "}
            <m.span variants={wordVariants}>Day</m.span>{" "}
            <m.span variants={wordVariants}>And</m.span>{" "}
            <m.span variants={wordVariants}>Improving</m.span>
          </h1>
        </m.div>
      </div>
    </main>
  );
};

export default Data;
