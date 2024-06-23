import { Header } from "../components/Header";
import { Home } from "../components/Home";
import { useMediaQuery } from "usehooks-ts";

export const HomePage = () => {
  const isDesktop = useMediaQuery("(min-width: 1440px)");

  return (
    <>
      <Header />
      <Home />
      {isDesktop && (
        <p className="outline-text w-full font-bold uppercase">
          FRONT-END DEVELOPER
        </p>
      )}
    </>
  );
};
