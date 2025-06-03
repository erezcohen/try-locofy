import { FunctionComponent } from "react";
import X from "./X";

export type SearchType = {
  className?: string;

  /** Variant props */
  state?: string;
  valueType?: string;
};

const Search: FunctionComponent<SearchType> = ({
  className = "",
  state = "Default",
  valueType = "Default",
}) => {
  return (
    <div
      className={`w-[920px] rounded-Radius-Full bg-Background-Default-Default border-Border-Default-Default border-solid border-Stroke-Border box-border overflow-hidden flex flex-row items-center justify-start py-Space-300 px-Space-400 gap-Space-200 ${className}`}
      data-state={state}
      data-valueType={valueType}
    >
      <input
        className="w-[calc(100%_-_40px)] [border:none] [outline:none] font-Body-Font-Family text-Body-Size-Medium bg-[transparent] flex-1 relative leading-[100%] text-Text-Default-Default text-left inline-block"
        placeholder="Search Devices"
        type="text"
      />
      <X size={16} showX icon="/icon-11.svg" />
    </div>
  );
};

export default Search;
