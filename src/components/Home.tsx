import { Form } from "./Form";
import globe from "/icons/globe.svg";
import { useMediaQuery } from "usehooks-ts";

export const Home = () => {
  const isDesktop = useMediaQuery("(min-width: 1440px)");

  return (
    <main className="text-white text-xs mx-auto py-3 px-4 large:mt-20 large:flex large:justify-between large:max-w-5xl">
      <div className="large:max-w-[427px]">
        <div className="flex justify-center items-center gap-1 bg-[#4252D1] max-w-[89px] large:max-w-28 mx-auto large:mx-0 mb-2 px-2 py-1 rounded">
          <img src={globe} alt="globe" className="large:w-5 large:h-5" />
          <h2 className="large:text-base">Вебинар</h2>
        </div>
        <div
          className={`flex flex-col justify-center items-center large:justify-start large:items-start text-xs ${
            !isDesktop && "text-center"
          }`}
        >
          <h1>
            <span className="text-redAccent uppercase text-5xl large:text-[77px] text-nowrap font-bold">
              Front-end
            </span>{" "}
            <br />
            <span className=" before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-redAccent before:rounded relative inline-block mr-2 mt-2 large:mt-4 large:mr-4">
              <span className="relative uppercase font-bold large:text-2xl">
                с нуля
              </span>
            </span>{" "}
            <span className="text-sm large:text-2xl">
              легкий старт в IT професии
            </span>
          </h1>
          <p className="mt-4 font-thin leading-5 md:max-w-lg large:text-lg">
            Узнайте какими{" "}
            <span className="font-medium">
              навыками должен обладать фронтенд разработчик в 2022 году
            </span>{" "}
            и как начать карьеру в востребованной профессии
          </p>
        </div>
        {!isDesktop && <Form />}
        <ul className="flex flex-col justify-center gap-5 text-xs mt-8 mb-10 mx-auto max-w-3xl md:flex-row large:flex-col-reverse">
          <li className="flex justify-center large:justify-start gap-4">
            <div>
              <img src="/images/gift.png" alt="gift" className="w-11 h-11" />
            </div>
            <div className="font-thin max-w-[162px] md:max-w-[308px]">
              <h3 className="font-bold text-sm">Бонус за регистрацию</h3>
              <p className="text-xs">
                PDF-файл "5 преимуществ профессии веб-дизайнера"
              </p>
            </div>
          </li>
          <li className="flex justify-center large:justify-start gap-4">
            <div>
              <img
                src="/images/mentor.png"
                alt="mentor"
                className="w-11 h-11"
              />
            </div>
            <div className="font-thin max-w-[162px] md:max-w-[308px]">
              <h3 className="font-bold uppercase text-sm">
                Кирилл <span className="text-[#4252D1]">КАСАТОНОВ</span>
              </h3>
              <p className="text-xs">
                6 лет коммерческого опыта с такими компаниями как Mercedes-Benz
                и другими крупными корпорациями
              </p>
            </div>
          </li>
        </ul>
      </div>
      {isDesktop && (
        <div>
          <Form />
        </div>
      )}
    </main>
  );
};
