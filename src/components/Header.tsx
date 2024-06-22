import calendarIcon from "/icons/calendar.svg";
import clockIcon from "/icons/clock.svg";

export const Header = () => {
  return (
    <header>
      <div className="flex justify-between items-center">
        <div>
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div>
          <div>
            <img src={calendarIcon} alt="calendar" className="w-6 h-6 mr-2" />
            <p>28 декабря</p>
          </div>
          <div>
            <img src={clockIcon} alt="clock" className="w-6 h-6 mr-2" />
            <p>3,5 часа</p>
          </div>
        </div>
      </div>
    </header>
  );
};
