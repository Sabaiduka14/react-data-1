import { motion as m } from "framer-motion";
import { Button } from "./button";

const Pricing = () => {
  const pricingVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="w-full h-full mt-24 mb-6 px-4">
      <h1 className="text-center my-5 font-bold text-3xl">Pricing</h1>
      <m.div
        variants={pricingVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <m.div
          variants={itemVariants}
          className="w-full h-[350px] rounded-lg px-4 py-2 flex flex-col bg-[#18181b] text-white"
        >
          <h1 className="text-2xl font-bold mb-6 mt-2">Starter Pack</h1>
          <p className="font-semibold text-lg my-1">1 Business</p>
          <p className="font-semibold text-lg my-1">1 Mentor</p>
          <p className="font-semibold text-lg my-1">No Live Help</p>
          <p className="font-semibold text-lg my-1">0 Video</p>
          <Button
            variant="outline"
            className="font-semibold text-lg my-1 text-[#18181b] mt-auto mb-4"
          >
            $9.95/M
          </Button>
        </m.div>
        <m.div
          variants={itemVariants}
          className="w-full h-[350px] rounded-lg px-4 py-2 flex flex-col bg-[#18181b] text-white"
        >
          <h1 className="text-2xl font-bold mb-6 mt-2">Pro Pack</h1>
          <p className="font-semibold text-lg my-1">1 Business</p>
          <p className="font-semibold text-lg my-1">1 Mentor</p>
          <p className="font-semibold text-lg my-1">No Live Help</p>
          <p className="font-semibold text-lg my-1">0 Video</p>
          <Button
            variant="outline"
            className="font-semibold text-lg my-1 text-[#18181b] mt-auto mb-4"
          >
            $19.95/M
          </Button>
        </m.div>
        <m.div
          variants={itemVariants}
          className="w-full h-[350px] rounded-lg px-4 py-2 flex flex-col bg-[#18181b] text-white"
        >
          <h1 className="text-2xl font-bold mb-6 mt-2">Business Pack</h1>
          <p className="font-semibold text-lg my-1">1 Business</p>
          <p className="font-semibold text-lg my-1">1 Mentor</p>
          <p className="font-semibold text-lg my-1">No Live Help</p>
          <p className="font-semibold text-lg my-1">0 Video</p>
          <Button
            variant="outline"
            className="font-semibold text-lg my-1 text-[#18181b] mt-auto mb-4"
          >
            $29.95/M
          </Button>
        </m.div>
      </m.div>
    </main>
  );
};

export default Pricing;
