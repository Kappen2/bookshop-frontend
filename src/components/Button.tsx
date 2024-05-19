import React from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
  onClick: () => void;
}

const Button: React.FC<Props> = ({ children, onClick, color = "primary" }) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
