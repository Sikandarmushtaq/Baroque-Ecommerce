const TopBar = () => {
  const data = [
    "FOR INTERNATIONAL WEBSITE VISIT WWW.BAROQUE.COM.PK",
    "CALL US AT: UAN 111-302-302",
  ];

  return (
    <div className="fixed top-0 left-0 z-[1000] flex h-7 sm:h-9 w-full items-center overflow-hidden bg-[#2d2d2d]">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...data, ...data, ...data].map((item, index) => (
          <p
            key={index}
            className="mx-6 sm:mx-16 text-[10px] sm:text-[12px] font-medium uppercase tracking-[1px] sm:tracking-[2px] text-white"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default TopBar;