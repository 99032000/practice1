import { IconType } from "react-icons";
import { FaAngleDown, FaSearch, FaHome, FaVideo } from "react-icons/fa";
import { IoMdTrendingUp, IoMdSettings } from "react-icons/io";
import { BiMoviePlay } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";
export default function Modal(props) {
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
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      {/* <!--
      Background backdrop, show/hide based on modal state.
  
      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    --> */}
      <div className="fixed inset-0 bg-gray-600 bg-opacity-90 transition-opacity text-xl"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex flex-col justify-between min-h-full p-4">
          {/* <!--
          Modal panel, show/hide based on modal state.
  
          Entering: "ease-out duration-300"
            From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            To: "opacity-100 translate-y-0 sm:scale-100"
          Leaving: "ease-in duration-200"
            From: "opacity-100 translate-y-0 sm:scale-100"
            To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        --> */}
          <div className="flex flex-row justify-between items-center ">
            <div className="flex flew-row">
              <FaAngleDown className="text-rose-500 text-3xl" />
              <p className="text-slate-50 ">PLAY</p>
            </div>
            <AiOutlineMenu onClick={() => props.setOpen(false)} />
          </div>
          <div className="flex flex-col gap-12 text-gray-300">
            {barData.map((item, index) => {
              return (
                <div
                  className="flex flex-row items-center gap-6 cursor-pointer hover:text-gray-100 "
                  key={index}
                >
                  <div>{item.icon}</div>
                  <div>
                    {item.active ? (
                      <p className="border-b-2 border-red-600 ">
                        {item.content}
                      </p>
                    ) : (
                      <p>{item.content}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-4 text-sm text-gray-300 mb-6">
            <div className="flex items-center gap-2 cursor-pointer ">
              <RxAvatar className="" />
              <p>Damon gege</p>
            </div>
            <div className="flex items-center gap-2 cursor-pointer ">
              <IoMdSettings />
              <p>Settings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
