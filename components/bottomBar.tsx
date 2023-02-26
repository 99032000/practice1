import { FaHome, FaVideo } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";
import { BiMoviePlay } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import Modal from "./modal";
export default function BottomBar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className=" absolute top-3 right-3 text-gray-300 text-xl">
        <AiOutlineMenu onClick={() => setOpen(true)} />
        {open ? <Modal setOpen={setOpen} /> : null}
      </div>
      <div></div>
      <div className=" bg-zinc-800 w-full flex flex-row text-xl text-gray-700">
        <div className=" basis-1/4 h-14 flex justify-center items-center bg-zinc-600 text-gray-400 border-b-4 border-red-600">
          <FaHome />
        </div>
        <div className=" basis-1/4 h-14 flex justify-center items-center">
          <IoMdTrendingUp />
        </div>
        <div className=" basis-1/4 h-14 flex justify-center items-center">
          <FaVideo />
        </div>
        <div className=" basis-1/4 h-14 flex justify-center items-center">
          <BiMoviePlay />
        </div>
      </div>
    </>
  );
}
