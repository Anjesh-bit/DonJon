import React, { ReactNode, MouseEvent } from "react";

interface CardsProps {
  children: ReactNode;
  className?: string;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  key?: string | number;
  style: Object;
}

const Cards: React.FC<CardsProps> = ({
  children,
  className = "",
  onClick,
  style,
  key,
}) => {
  const handleOnClick = (e: MouseEvent<HTMLDivElement>): void => {
    onClick && onClick(e);
  };

  return (
    <div
      className={`shadow-md rounded-md ${className}`}
      key={key}
      onClick={handleOnClick}
      style={style}
    >
      {children}
    </div>
  );
};

export default Cards;
