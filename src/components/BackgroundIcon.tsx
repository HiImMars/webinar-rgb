import { FC } from "react";

interface Props {
  containerClassName?: string;
  ellipseClassName?: string;
  imageClassName?: string;
  src: string;
  alt: string;
}

export const BackgroundIcon: FC<Props> = ({
  src,
  alt,
  containerClassName,
  ellipseClassName,
  imageClassName,
}) => {
  return (
    <div className={`absolute ${containerClassName}`}>
      <div
        className={`rounded-full absolute right-0 top-0 ${ellipseClassName}`}
      ></div>
      <img src={src} alt={alt} className={imageClassName} />
    </div>
  );
};
