import React from "react";

const ContextualRisk = () => {
  const CONTEXTUAL_RISK = [
    { text: "Critical", value: 2, color: "#C6190D" },
    { text: "High", value: 0, color: "#E5372B" },
    { text: "Medium", value: 0, color: "#EBA622" },
    { text: "Low", value: 0, color: "#08B94E" },
  ];

  return (
    <>
      <p className="text-[1.125rem] font-medium leading-[1.75] text-gray-soft-500">
        Contextual Risk
      </p>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-col gap-4">
          {CONTEXTUAL_RISK.map((risk) => (
            <div
              key={risk.text}
              className="flex items-center gap-1 text-[1rem] leading-[1.25] text-[#383874]"
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{
                  backgroundColor: risk.color,
                }}
              ></span>
              <span className="">{risk.value}</span>
              <span className="">{risk.text}</span>
            </div>
          ))}
        </div>

        <div className="h-36 w-36 rounded-full border-[8px] border-[#C6190D]"></div>
      </div>
    </>
  );
};

export default ContextualRisk;
