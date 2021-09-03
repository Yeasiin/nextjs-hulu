import { useRouter } from "next/router";
import request from "./../utils/request";

function Nav() {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {Object.entries(request).map(([key, { title, url }]) => {
          return (
            <h2
              onClick={() => router.push(`?genre=${key}`)}
              key={key}
              className="last:pr-24 cursor-pointer transition duration-100 hover:scale-110 hover:text-white  active:text-red-500 "
            >
              {title}
            </h2>
          );
        })}
      </div>
      <div className="absolute top-0 right-0 h-10 w-1/12 bg-gradient-to-l from-[#06202A] " />
    </nav>
  );
}

export default Nav;
