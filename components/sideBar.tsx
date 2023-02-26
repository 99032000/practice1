import { IconType } from "react-icons";
import { FaAngleDown, FaSearch, FaHome, FaVideo } from "react-icons/fa";
import { IoMdTrendingUp, IoMdSettings } from "react-icons/io";
import { BiMoviePlay } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";
export default function SideBar() {
  const barData: Array<any> = [
    {
      icon: <FaSearch />,
      content: "Search",
    },
    {
      icon: <FaHome />,
      content: "Home",
      active: true,
    },
    {
      icon: <IoMdTrendingUp />,
      content: "Trending",
    },
    {
      icon: <FaVideo />,
      content: "Web Series",
    },
    {
      icon: <BiMoviePlay />,
      content: "Movies",
    },
  ];
  return (
    <div className=" bg-zinc-800 h-full p-2 flex flex-col justify-between w-12 lg:w-32">
      <div className="flex items-center">
        <FaAngleDown className="text-rose-500 h-auto w-full lg:w-1/3" />
        <p className="text-slate-50 text-xl hidden lg:block">PLAY</p>
      </div>
      <div className="flex flex-col gap-12 text-sm text-gray-500">
        {barData.map((item, index) => {
          return (
            <div
              className="flex flex-row items-center gap-2 cursor-pointer hover:text-gray-300 justify-center lg:justify-start"
              key={index}
            >
              <div>{item.icon}</div>
              <div className="hidden lg:block">
                {item.active ? (
                  <p className="border-b-2 border-red-600 ">{item.content}</p>
                ) : (
                  <p>{item.content}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-300 mb-6">
        <div className="flex items-center gap-2 cursor-pointer justify-center lg:justify-start">
          <RxAvatar className="" />
          <p className="hidden lg:block">Damon gege</p>
        </div>
        <div className="flex items-center gap-2 cursor-pointer justify-center lg:justify-start">
          <IoMdSettings />
          <p className="hidden lg:block">Settings</p>
        </div>
      </div>
    </div>
  );
}
