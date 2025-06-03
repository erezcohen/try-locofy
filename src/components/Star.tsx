import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type StarType = {
  className?: string;
  icon?: string;

  /** Variant props */
  size?: 16 | 20;

  /** Style props */
  starWidth?: CSSProperties["width"];
  starHeight?: CSSProperties["height"];
};

const Star: FunctionComponent<StarType> = ({
  className = "",
  size = 48,
  starWidth,
  starHeight,
  icon,
}) => {
  const starStyle: CSSProperties = useMemo(() => {
    return {
      width: starWidth,
      height: starHeight,
    };
  }, [starWidth, starHeight]);

  return (
    <div
      className={`w-5 relative h-5 overflow-hidden shrink-0 data-[size='16']:[filter:brightness(0)_saturate(100%)_invert(100%)_sepia(0%)_saturate(7356%)_hue-rotate(273deg)_brightness(85%)_contrast(115%)] data-[size='16']:hidden data-[size='16']:[&_.icon]:[filter:brightness(0)_saturate(100%)_invert(100%)_sepia(0%)_saturate(7356%)_hue-rotate(273deg)_brightness(85%)_contrast(115%)] data-[size='16']:[&_.icon]:h-[79.38%] data-[size='16']:[&_.icon]:w-[83.13%] data-[size='16']:[&_.icon]:top-[8.13%] data-[size='16']:[&_.icon]:right-[8.75%] data-[size='16']:[&_.icon]:bottom-[12.5%] data-[size='16']:[&_.icon]:left-[8.13%] ${className}`}
      data-size={size}
      style={starStyle}
    >
      <img
        className="icon absolute h-[79.5%] w-[83.5%] top-[8.5%] right-[8%] bottom-[12%] left-[8.5%] max-w-full overflow-hidden max-h-full"
        loading="lazy"
        alt=""
        src={icon}
      />
    </div>
  );
};

export default Star;
