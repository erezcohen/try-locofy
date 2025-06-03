import { FunctionComponent } from "react";

export type Depth4FrameType = {
  className?: string;
  deviceID?: string;
};

const Depth4Frame: FunctionComponent<Depth4FrameType> = ({
  className = "",
  deviceID,
}) => {
  return (
    <div
      className={`flex flex-row items-end justify-start flex-wrap content-end py-3 px-4 box-border max-w-[480px] text-left text-[16px] text-[#0d0f1c] font-[Inter] mq800:max-w-full ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start min-w-[160px]">
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2">
          <div className="self-stretch relative leading-6 font-medium">
            {deviceID}
          </div>
        </div>
        <input
          className="border-[#cfd1e8] border-solid border-[1px] [outline:none] w-full bg-[#f7fafc] self-stretch h-8 rounded-lg box-border overflow-hidden shrink-0 min-w-[250px]"
          type="text"
        />
      </div>
    </div>
  );
};

export default Depth4Frame;
