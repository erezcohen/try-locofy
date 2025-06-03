import { FunctionComponent } from "react";
import Header from "../components/Header";
import Depth4Frame from "../components/Depth4Frame";
import ButtonDanger from "../components/ButtonDanger";

const DevicesDetails: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-Background-Default-Default flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <main className="self-stretch bg-[#f7fafc] flex flex-col items-start justify-start min-h-[800px]">
        <section className="self-stretch flex flex-col items-start justify-start">
          <Header />
          <main className="self-stretch h-[973px] flex flex-row items-start justify-center py-5 px-6 box-border text-left text-[32px] text-[#0d0f1c] font-[Inter]">
            <div className="flex-1 overflow-hidden flex flex-col items-start justify-start max-w-[920px] mq1125:max-w-full">
              <div className="self-stretch flex flex-row items-start justify-between flex-wrap content-start p-4">
                <div className="flex flex-col items-start justify-start gap-3 min-w-[288px]">
                  <div className="w-72 flex flex-col items-start justify-start">
                    <h1 className="m-0 self-stretch relative text-[length:inherit] leading-10 font-bold font-[inherit] mq450:text-[19px] mq450:leading-6 mq1125:text-[26px] mq1125:leading-8">
                      Device Details
                    </h1>
                  </div>
                  <div className="w-72 flex flex-col items-start justify-start text-[14px] text-[#47579e]">
                    <div className="self-stretch relative leading-[21px]">
                      View or change device information
                    </div>
                  </div>
                </div>
              </div>
              <Depth4Frame deviceID="Device ID" />
              <Depth4Frame deviceID="Device Model" />
              <Depth4Frame deviceID="Device OS And Version" />
              <Depth4Frame deviceID="Device Serial Number" />
              <Depth4Frame deviceID="Device Status" />
              <Depth4Frame deviceID="Device Data Center" />
              <Depth4Frame deviceID="Device Owner" />
              <Depth4Frame deviceID="Device Notes" />
              <div className="self-stretch flex flex-row items-start justify-end py-3 px-4">
                <ButtonDanger
                  size="Medium"
                  state="Default"
                  variant="Primary"
                  label="Save"
                  hasIconStart={false}
                  hasIconEnd={false}
                />
              </div>
            </div>
          </main>
        </section>
      </main>
    </div>
  );
};

export default DevicesDetails;
