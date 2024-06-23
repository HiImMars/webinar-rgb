import calendarIcon from "/icons/calendar.svg";
import clockIcon from "/icons/clock.svg";
import logo from "/icons/logo.svg";

export const Header = () => {
  return (
    <header className="md:max-w-3xl large:max-w-5xl mx-auto px-4 py-6">
      <div className="flex justify-between items-center text-white text-xs md:text-sm">
        <div className="flex justify-center items-center gap-2">
          <img src={logo} alt="logo" className="w-7 h-8 md:w-12 md:h-14" />
          <p className="uppercase font-thin md:text-sm">
            Powercode
            <br />
            <span className="uppercase text-sm md:text-base font-semibold">
              Academy
            </span>
          </p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div className="flex justify-center items-center bg-[#302E5A] px-2 py-1 md:px-4 md:py-2 gap-1 rounded-md">
            <img
              src={calendarIcon}
              alt="calendar"
              className="w-3 h-3 md:w-4 md:h-4"
            />
            <p>28 декабря</p>
          </div>
          <div className="flex justify-center items-center bg-[#302E5A] px-2 py-1 md:px-4 md:py-2 gap-1 rounded-md">
            <img
              src={clockIcon}
              alt="clock"
              className="w-3 h-3 md:w-4 md:h-4"
            />
            <p>3,5 часа</p>
          </div>
        </div>
      </div>
    </header>
  );
};
