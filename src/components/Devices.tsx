import { FunctionComponent } from "react";
import Header from "./Header";
import Search from "./Search";
import Depth8Frame1 from "./Depth8Frame1";

export type DevicesType = {
  className?: string;
};

const Devices: FunctionComponent<DevicesType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1390px] bg-Background-Default-Default max-w-full flex flex-col items-start justify-start leading-[normal] tracking-[normal] ${className}`}
    >
      <main className="self-stretch bg-[#f7fafc] flex flex-col items-start justify-start min-h-[800px]">
        <section className="self-stretch h-[973px] flex flex-col items-start justify-start">
          <Header headerHeight="unset" />
          <main className="self-stretch flex-1 flex flex-row items-start justify-center py-5 px-40 text-left text-[32px] text-[#0d0f1c] font-[Inter] mq800:pl-10 mq800:pr-10 mq800:box-border mq1300:pl-20 mq1300:pr-20 mq1300:box-border">
            <div className="flex-1 overflow-hidden flex flex-col items-start justify-start max-w-[960px] mq1125:max-w-full">
              <div className="self-stretch flex flex-row items-start justify-between flex-wrap content-start p-4">
                <div className="w-72 flex flex-col items-start justify-start min-w-[288px]">
                  <h1 className="m-0 self-stretch relative text-[length:inherit] leading-10 font-bold font-[inherit] mq450:text-[19px] mq450:leading-6 mq800:text-[26px] mq800:leading-8">
                    Devices
                  </h1>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start py-3 px-4">
                <Search state="Default" valueType="Default" />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start py-3 px-4 text-[14px]">
                <div className="self-stretch rounded-lg bg-[#f7fafc] border-[#cfd1e8] border-solid border-[1px] overflow-hidden flex flex-row items-start justify-start">
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="self-stretch flex-1 bg-[#f7fafc] overflow-x-auto flex flex-row items-start justify-start">
                        <div className="self-stretch w-[155px] shrink-0 flex flex-col items-start justify-start py-3 px-4 box-border">
                          <b className="self-stretch relative leading-[21px]">
                            ID
                          </b>
                        </div>
                        <div className="self-stretch w-[150px] shrink-0 flex flex-col items-start justify-start py-3 px-4 box-border">
                          <b className="self-stretch relative leading-[21px]">
                            Model
                          </b>
                        </div>
                        <div className="self-stretch w-[155px] shrink-0 flex flex-col items-start justify-start py-3 px-4 box-border">
                          <b className="self-stretch relative leading-[21px]">
                            OS and Version
                          </b>
                        </div>
                        <div className="self-stretch w-[175px] shrink-0 flex flex-col items-start justify-start py-3 px-4 box-border">
                          <b className="self-stretch relative leading-[21px]">
                            Status
                          </b>
                        </div>
                        <div className="self-stretch w-[151px] shrink-0 flex flex-col items-start justify-start py-3 px-4 box-border">
                          <b className="self-stretch relative leading-[21px]">
                            Data Center
                          </b>
                        </div>
                        <div className="self-stretch w-[141px] shrink-0 flex flex-col items-start justify-start py-3 px-4 box-border text-[#47579e]">
                          <b className="self-stretch relative leading-[21px]">
                            Actions
                          </b>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <Depth8Frame1
                        device001="Device-001"
                        galaxyS21="Galaxy S21"
                        android12="Android 12"
                        connected="Connected"
                        dCWest="DC-West"
                        disconnect="Disconnect"
                      />
                      <Depth8Frame1
                        device001="Device-002"
                        galaxyS21="iPhone 13 Pro"
                        android12="iOS 15.4"
                        depth10Frame0Border="none"
                        connected="Connected"
                        dCWest="DC-East"
                        disconnect="Disconnect"
                      />
                      <Depth8Frame1
                        device001="Device-003"
                        galaxyS21="Pixel 6"
                        android12="Android 13"
                        depth10Frame0Border="none"
                        connected="Disconnected"
                        dCWest="DC-Central"
                        disconnect="Connect"
                      />
                      <Depth8Frame1
                        device001="Device-004"
                        galaxyS21="Galaxy S20"
                        android12="Android 11"
                        depth10Frame0Border="none"
                        connected="Connected"
                        dCWest="DC-West"
                        disconnect="Disconnect"
                      />
                      <Depth8Frame1
                        device001="Device-005"
                        galaxyS21="iPhone 12"
                        android12="iOS 14.8"
                        depth10Frame0Border="none"
                        connected="Disconnected"
                        dCWest="DC-East"
                        disconnect="Connect"
                      />
                      <Depth8Frame1
                        device001="Device-006"
                        galaxyS21="Pixel 5a"
                        android12="Android 12"
                        depth10Frame0Border="none"
                        connected="Connected"
                        dCWest="DC-Central"
                        disconnect="Disconnect"
                      />
                      <Depth8Frame1
                        device001="Device-007"
                        galaxyS21="Galaxy S10"
                        android12="Android 10"
                        depth10Frame0Border="none"
                        connected="Disconnected"
                        dCWest="DC-West"
                        disconnect="Connect"
                      />
                      <Depth8Frame1
                        device001="Device-008"
                        galaxyS21="iPhone 11"
                        android12="iOS 13.7"
                        depth10Frame0Border="none"
                        connected="Connected"
                        dCWest="DC-East"
                        disconnect="Disconnect"
                      />
                      <Depth8Frame1
                        device001="Device-009"
                        galaxyS21="Pixel 4a"
                        android12="Android 11"
                        depth10Frame0Border="none"
                        connected="Disconnected"
                        dCWest="DC-Central"
                        disconnect="Connect"
                      />
                      <Depth8Frame1
                        device001="Device-010"
                        galaxyS21="Galaxy S9"
                        android12="Android 9"
                        depth10Frame0Border="unset"
                        connected="Connected"
                        dCWest="DC-West"
                        disconnect="Disconnect"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </section>
      </main>
    </div>
  );
};

export default Devices;
