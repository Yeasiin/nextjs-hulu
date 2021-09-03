function HeaderItem({ title, Icon }) {
  return (
    <div className="flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white group ">
      <Icon className="h-8 mb-1 group-hover:scale-125 transition ease-in " />
      <p className=" opacity-0 group-hover:opacity-100 tracking-widest transition ease-in ">
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
