import React from "react";
import classNames from "../utils/classNames";

type ButtonProps = {
  type: "primary" | "text";
  children?: React.ReactNode;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  type,
  onClick = () => {},
}: ButtonProps) => {
  const primaryClasses: string =
    "inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary hover:bg-yellow-600 focus:outline-none focus:border-yellow-700 focus:shadow-outline-blue active:bg-yellow-800 transition ease-in-out duration-150";

  const textClasses: string =
    "inline-flex items-center px-4 py-2 border border-gray-300 text-base leading-6 bg-primary-background font-medium rounded-md text-primary-text hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150";

  return (
    <span className="inline-flex rounded-full shadow-sm">
      <button
        type="button"
        className={type === "primary" ? primaryClasses : textClasses}
        onClick={onClick}
      >
        {children}
      </button>
    </span>
  );
};

export default Button;
