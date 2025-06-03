import { FunctionComponent } from "react";

export type XType = {
  className?: string;
  showX?: boolean;
  icon?: string;

  /** Variant props */
  size?: 16;
};

const X: FunctionComponent<XType> = ({
  className = "",
  size = 48,
  showX,
  icon,
}) => {
  return (
    <div
      className={`w-4 relative h-4 overflow-hidden shrink-0 ${className}`}
      data-size={size}
    >
      <img
        className="absolute h-3/6 w-6/12 top-[25%] right-[25%] bottom-[25%] left-[25%] max-w-full overflow-hidden max-h-full"
        alt=""
        src={icon}
      />
    </div>
  );
};

export default X;
