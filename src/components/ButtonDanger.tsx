import { FunctionComponent } from "react";
import Star from "./Star";
import X from "./X";

export type ButtonDangerType = {
  className?: string;
  label?: string;
  hasIconStart?: boolean;
  hasIconEnd?: boolean;

  /** Variant props */
  size?: string;
  state?: string;
  variant?: string;
};

const ButtonDanger: FunctionComponent<ButtonDangerType> = ({
  className = "",
  size = "Medium",
  state = "Default",
  variant = "Primary",
  label = "Save",
  hasIconStart = false,
  hasIconEnd = false,
}) => {
  return (
    <button
      className={`cursor-pointer border-Border-Danger-Secondary border-solid border-Stroke-Border p-Space-300 bg-[#961fec] rounded-Radius-200 overflow-hidden flex flex-row items-center justify-center gap-Space-200 ${className}`}
      data-size={size}
      data-state={state}
      data-variant={variant}
    >
      <Star size={16} starWidth="16px" starHeight="16px" icon="/icon-1.svg" />
      <div className="relative text-Body-Size-Medium leading-[100%] font-Body-Font-Family text-Text-Danger-On-Danger text-left">
        {label}
      </div>
      <X size={16} showX={false} icon="/icon-2.svg" />
    </button>
  );
};

export default ButtonDanger;
