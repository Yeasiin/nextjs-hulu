import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div
      ref={ref}
      className="group cursor-pointer p-2 lg:p-3 transition duration-200 ease-in transform md:hover:scale-105 hover:z-50 "
    >
      <Image
        layout="responsive"
        width={1920}
        height={1080}
        src={`${BASE_URL}${result.backdrop_path}`}
        alt=""
      />
      <div className="p-2">
        <p className="max-w-md truncate capitalize">{result.overview}</p>
        <h2 className="text-2xl font-bold capitalize ">
          {result.title || result.original_name}
        </h2>
        <p
          className="flex items-center opacity-0 transition duration-100
        ease-in group-hover:opacity-100 "
        >
          {result.media_type && (
            <span className="uppercase">
              {result.media_type}&nbsp; ● &nbsp;&nbsp;
            </span>
          )}
          <span>{result.release_date || result.first_air_date}&nbsp; ●</span>
          <ThumbUpIcon className="h-5 mx-2" /> ● &nbsp;{result.vote_count}
        </p>
      </div>
    </div>
  );
});

export default Thumbnail;
