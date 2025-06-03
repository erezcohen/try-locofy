import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type Depth8Frame1Type = {
  className?: string;
  device001?: string;
  galaxyS21?: string;
  android12?: string;
  connected?: string;
  dCWest?: string;
  disconnect?: string;

  /** Style props */
  depth10Frame0Border?: CSSProperties["border"];
};

const Depth8Frame1: FunctionComponent<Depth8Frame1Type> = ({
  className = "",
  device001,
  galaxyS21,
  android12,
  depth10Frame0Border,
  connected,
  dCWest,
  disconnect,
}) => {
  const depth10Frame0Style: CSSProperties = useMemo(() => {
    return {
      border: depth10Frame0Border,
    };
  }, [depth10Frame0Border]);

  return (
    <div
      className={`self-stretch h-[72px] border-[#e6e8eb] border-solid border-t-[1px] box-border overflow-x-auto shrink-0 flex flex-row items-start justify-start text-left text-[14px] text-[#47579e] font-[Inter] ${className}`}
    >
      <div className="h-[72px] w-[155px] shrink-0 flex flex-col items-center justify-center py-2 px-4 box-border text-[#0d0f1c]">
        <div className="self-stretch relative leading-[21px]">{device001}</div>
      </div>
      <div className="h-[72px] w-[150px] shrink-0 flex flex-col items-center justify-center py-2 px-4 box-border">
        <div className="self-stretch relative leading-[21px]">{galaxyS21}</div>
      </div>
      <div className="h-[72px] w-[155px] shrink-0 flex flex-col items-center justify-center py-2 px-4 box-border">
        <div className="self-stretch relative leading-[21px]">{android12}</div>
      </div>
      <div className="h-[72px] w-[175px] shrink-0 flex flex-col items-center justify-center py-2 px-4 box-border">
        <button
          className="cursor-pointer [border:none] py-0 px-4 bg-[#e6e8f5] w-full h-8 rounded-lg overflow-hidden shrink-0 flex flex-row items-center justify-center box-border min-w-[84px] max-w-[480px] mq800:max-w-full"
          style={depth10Frame0Style}
        >
          <div className="overflow-hidden flex flex-col items-center justify-start">
            <div className="self-stretch relative text-[14px] leading-[21px] font-medium font-[Inter] text-[#0d0f1c] text-center overflow-hidden text-ellipsis whitespace-nowrap">
              {connected}
            </div>
          </div>
        </button>
      </div>
      <div className="h-[72px] w-[151px] shrink-0 flex flex-col items-center justify-center py-2 px-4 box-border">
        <div className="self-stretch relative leading-[21px]">{dCWest}</div>
      </div>
      <div className="h-[72px] w-[141px] shrink-0 flex flex-col items-center justify-center py-2 px-4 box-border">
        <b className="self-stretch relative leading-[21px]">{disconnect}</b>
      </div>
    </div>
  );
};

export default Depth8Frame1;
