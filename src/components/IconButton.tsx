import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Star from "./Star";

export type IconButtonType = {
  className?: string;

  /** Variant props */
  size?: string;
  state?: string;
  variant?: string;

  /** Style props */
  iconButtonOverflow?: CSSProperties["overflow"];
};

const IconButton: FunctionComponent<IconButtonType> = ({
  className = "",
  size = "Medium",
  state = "Default",
  variant = "Primary",
  iconButtonOverflow,
}) => {
  const iconButtonStyle: CSSProperties = useMemo(() => {
    return {
      overflow: iconButtonOverflow,
    };
  }, [iconButtonOverflow]);

  return (
    <div
      className={`rounded-Scale-06 bg-Background-Brand-Default border-Border-Brand-Default border-solid border-Stroke-Border flex flex-row items-center justify-center p-Space-300 ${className}`}
      data-size={size}
      data-state={state}
      data-variant={variant}
      style={iconButtonStyle}
    >
      <Star size={20} icon="/icon.svg" />
    </div>
  );
};

export default IconButton;
