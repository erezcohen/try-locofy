import { FunctionComponent, useMemo, type CSSProperties } from "react";
import IconButton from "./IconButton";

export type HeaderType = {
  className?: string;

  /** Style props */
  headerHeight?: CSSProperties["height"];
};

const Header: FunctionComponent<HeaderType> = ({
  className = "",
  headerHeight,
}) => {
  const headerStyle: CSSProperties = useMemo(() => {
    return {
      height: headerHeight,
    };
  }, [headerHeight]);

  return (
    <header
      className={`self-stretch h-[69px] border-[#e6e8eb] border-solid border-b-[1px] box-border flex flex-row items-center justify-between py-3 px-10 gap-0 top-[0] z-[99] sticky text-left text-[18px] text-[#0d0f1c] font-[Inter] ${className}`}
      style={headerStyle}
    >
      <div className="w-[300px] flex flex-row items-center justify-start gap-8 min-w-[300px] lg:w-[120px] mq450:gap-4">
        <div className="flex flex-row items-center justify-start gap-4">
          <img
            className="w-4 max-h-full"
            loading="lazy"
            alt=""
            src="/depth-4-frame-0.svg"
          />
          <div className="flex flex-col items-start justify-start">
            <b className="self-stretch relative leading-[23px]">DCMS</b>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-9 text-[14px] text-[#565a6f] lg:hidden">
          <div className="flex flex-col items-start justify-start">
            <div className="self-stretch relative leading-[21px] font-medium">
              Data Centers
            </div>
          </div>
          <div className="flex flex-col items-start justify-start text-[#0d0f1c]">
            <b className="self-stretch relative leading-[21px]">Devices</b>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-row items-start justify-end">
        <IconButton size="Medium" state="Default" variant="Primary" />
      </div>
    </header>
  );
};

export default Header;
