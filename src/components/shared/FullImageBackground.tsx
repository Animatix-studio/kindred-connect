import type { CSSProperties, ReactNode } from "react";

type FullImageBackgroundProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  backdropClassName?: string;
  imageStyle?: CSSProperties;
  backdropStyle?: CSSProperties;
  children?: ReactNode;
};

const joinClasses = (...classes: Array<string | undefined>) =>
  classes.filter(Boolean).join(" ");

export const FullImageBackground = ({
  src,
  alt,
  className,
  imageClassName,
  backdropClassName,
  imageStyle,
  backdropStyle,
  children,
}: FullImageBackgroundProps) => {
  return (
    <div
      className={joinClasses(
        "absolute inset-0 overflow-hidden bg-background pointer-events-none",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className={joinClasses(
          "absolute inset-0 scale-105 bg-cover bg-center opacity-30 blur-sm",
          backdropClassName,
        )}
        style={{ backgroundImage: `url(${src})`, ...backdropStyle }}
      />

      <img
        src={src}
        alt={alt}
        className={joinClasses(
          "absolute inset-0 h-full w-full object-contain object-center",
          imageClassName,
        )}
        style={imageStyle}
      />

      {children}
    </div>
  );
};