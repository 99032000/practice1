import Image from "next/image";
import Data from "@/mockData/moviesData";
export default function NewThisWeek() {
  const movies = Data.movies.slice(0, 6);

  return (
    <div>
      <h2 className=" mb-2">New This Week</h2>
      <div className="flex flex-row justify-between gap-6 text-sm flex-nowrap w-[170vw] sm:w-[120vw]">
        {movies.map((item, index) => {
          return (
            <div className="flex-col basis-96" key={index}>
              <Image
                alt=""
                width={300}
                height={200}
                src={item.backdrop_path}
                className=" w-full h-fit mb-1"
              />
              <p className=" text-[10px] leading-none sm:text-xs">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
