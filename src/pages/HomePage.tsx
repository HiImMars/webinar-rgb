import { useMediaQuery } from "usehooks-ts";
import { Header } from "../components/Header";
import { Home } from "../components/Home";
import { BackgroundIcon } from "../components/BackgroundIcon";

export const HomePage = () => {
  const isDesktop = useMediaQuery("(min-width: 1440px)");

  return (
    <>
      <Header />
      <Home />
      {isDesktop && (
        <>
          <p className="outline-text w-full font-bold uppercase">
            FRONT-END DEVELOPER
          </p>
          <BackgroundIcon
            src="/images/html.png"
            alt="html"
            containerClassName="top-1/4 right-6"
            ellipseClassName="bg-orange-500 w-2 h-2"
            imageClassName="w-22 h-22"
          />

          <BackgroundIcon
            src="/images/css.png"
            alt="css"
            containerClassName="top-[35%] right-28"
            ellipseClassName="bg-blue-500 w-[6px] h-[6px]"
            imageClassName="w-16 h-20"
          />
          <BackgroundIcon
            src="/images/javascript.png"
            alt="javascript"
            containerClassName="top-[41%] right-4"
            ellipseClassName="bg-yellow-500 -right-2 top-5 w-2 h-2"
            imageClassName="w-16 h-20"
          />
          <BackgroundIcon
            src="/images/sublime.png"
            alt="sublime"
            containerClassName="bottom-[45%] right-28"
            ellipseClassName="bg-amber-500 w-[6px] h-[6px]"
            imageClassName="w-14 h-14"
          />
          <BackgroundIcon
            src="/images/vscode.png"
            alt="vscode"
            containerClassName="bottom-[38%] right-8"
            ellipseClassName="bg-sky-500 -right-3 top-12 w-[6px] h-[6px]"
            imageClassName="w-16 h-16"
          />
        </>
      )}
    </>
  );
};
