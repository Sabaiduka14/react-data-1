import { MenuIcon, X } from "lucide-react";
import { Button } from "./button";
import { useState } from "react";
import { motion as m } from "framer-motion";

export default function Navbar() {
  const [isTrue, setTrue] = useState(false);

  return (
    <header className="w-full py-5 px-4 flex justify-between items-center border-b">
      <h1 className="text-3xl text-primary font-bold">React.</h1>
      <nav className="flex items-center">
        <ul className="hidden md:flex gap-4 items-center">
          <li>Home</li>
          <li>Services</li>
          <Button>Login</Button>
          <Button>Register</Button>
        </ul>
        <div className="flex md:hidden" onClick={() => setTrue(!isTrue)}>
          {isTrue ? <X /> : <MenuIcon />}
        </div>
        {isTrue ? (
          <m.div
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{ x: -360, y: -40, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="side-nav md:hidden"
          >
            <ul className="fixed w-[250px] h-screen left-0 top-0 gap-6 px-4 py-12 bg-white border-r">
              <li className="mb-6 text-xl font-semibold">Home</li>
              <li className="mb-6 text-xl font-semibold">Services</li>
              <div className="flex flex-col gap-4">
                <Button className="py-2 px-4 rounded-md">Login</Button>
                <Button className="py-2 px-4 rounded-md">Register</Button>
              </div>
            </ul>
          </m.div>
        ) : (
          <></>
        )}
      </nav>
    </header>
  );
}
