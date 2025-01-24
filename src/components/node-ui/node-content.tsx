import { IBM_Plex_Mono } from "next/font/google";
import { ReceiptText, ShieldCheck, ShieldX } from "lucide-react";
import StacksIcon from "@/assets/stacks-icon";
import { statusColor } from "../status-legend";

const ibmPlex = IBM_Plex_Mono({
  weight: "600",
});

export const Pill = ({ color, bg }: { color: string; bg: string }) => (
  <span
    className={`rounded-md px-1 py-0.5 !text-[0.875rem] !font-semibold ${ibmPlex.className}`}
    style={{
      color,
      backgroundColor: bg,
    }}
  >
    1.2.3.4
  </span>
);

export const StartNodeContent = () => (
  <div
    className={`shadow-xsm w-[460px] rounded-[20px] bg-gray-soft-25 px-7 py-5 *:text-[0.875rem] *:font-semibold *:leading-[1.5rem] ${ibmPlex.className}`}
  >
    <div className="mb-3 *:text-[#E5372B]">
      <p className="mb-3 w-[216px] rounded-lg bg-[#FFF1F0]">
        Lorem Ipsum Dolor Sit
      </p>
      <div className="flex flex-wrap justify-end gap-1">
        {["1.2.3.4", "1.2.3.4", "1.2.3.4", "1.2.3.4", "1.2.3.4", "1.2.3.4"].map(
          (text, index) => (
            <p key={index} className="w-[110px] rounded-lg bg-[#FFF1F0]">
              {text}
            </p>
          ),
        )}
      </div>
    </div>
    <div className="inline-block rounded-lg bg-[#F2EDFF] px-1 py-0.5">
      <p className="text-[#6236CC]">Lorem: 1.2.3.4</p>
    </div>
  </div>
);

export const ProcessNodeContent = () => (
  <div className="shadow-drop_shadow flex w-[374px] flex-col gap-1.5 rounded-lg bg-gray-soft-25 px-4 py-2.5">
    <div className="flex items-center gap-3">
      <StacksIcon className="h-10 w-10" />
      <p className="text-[0.875rem] font-semibold text-gray-soft-700">
        Loremipsu
      </p>
    </div>
    <div className="flex flex-wrap items-center gap-1 *:text-[1rem] *:font-bold *:leading-[1.5] *:text-gray-soft-700">
      <ReceiptText className="h-4 w-4 text-gray-soft-400" />
      <span>Lorem:</span>
      <span className="">Loremipsum Loremipsum</span>
      <Pill color="#6236CC" bg="#F2EDFF" />
    </div>
    <div className="flex flex-wrap items-center gap-1 *:font-bold *:leading-[1.5] *:text-gray-soft-700">
      <Pill color="#6236CC" bg="#F2EDFF" />
      <span className="">Loremipsum</span>
      <Pill color="#6236CC" bg="#F2EDFF" />
      <Pill color="#6236CC" bg="#F2EDFF" />
    </div>
  </div>
);

export const EndNodeContent = ({
  status,
}: {
  status?: "success" | "error" | "warning";
}) => (
  <div className="shadow-drop_shadow flex w-[288px] flex-col gap-1.5 rounded-lg bg-gray-soft-25 px-4 py-2.5">
    <div className="flex items-center gap-3">
      <div className="relative">
        <StacksIcon className="h-10 w-10" />
        <div
          className="absolute -right-1.5 -top-1.5 grid h-6 w-6 place-content-center rounded-full"
          style={{
            backgroundColor: statusColor(status!),
          }}
        >
          {status === "success" ? (
            <ShieldCheck className="h-4 w-4 text-white" />
          ) : (
            <ShieldX className="h-4 w-4 text-white" />
          )}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-[0.875rem] font-semibold text-gray-soft-700">
          Loremipsumdolorsit
        </p>
        <span className="text-[0.75rem] font-semibold leading-[0.875rem] text-gray-soft-500">
          192.168.1.1
        </span>
      </div>
    </div>
    <div className="flex flex-wrap items-center gap-1 *:text-[1rem] *:font-bold *:leading-[1.5] *:text-gray-soft-700">
      <ReceiptText className="h-4 w-4 text-gray-soft-400" />
      <span>Lorem:</span>
      <span
        className={`rounded-md bg-[#FFF9ED] px-1 py-0.5 !text-[0.875rem] font-semibold !text-[#EBA622] ${ibmPlex.className}`}
      >
        Lorem &quot;ipsum&quot;
      </span>
    </div>
    <div className="flex flex-wrap items-center gap-1 *:text-[1rem] *:font-bold *:leading-[1.5] *:text-gray-soft-700">
      <span>Loremipsum</span>
      <span
        className={`rounded-md bg-[#ECF5FF] px-1 py-0.5 !text-[0.875rem] font-semibold !text-[#0053B5] ${ibmPlex.className}`}
      >
        Lorem 1234,5678
      </span>
    </div>
  </div>
);
