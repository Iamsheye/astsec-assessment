import { ShieldCheck, ShieldX } from "lucide-react";

type StatusLegendProps = {
  status: "success" | "error" | "warning";
};

const StatusLegend = ({ status }: StatusLegendProps) => {
  const statusColor = (status: StatusLegendProps["status"]) => {
    switch (status) {
      case "success":
        return "#02983E";
      case "error":
        return "#E5372B";
      case "warning":
        return "#FF9500";
    }
  };

  return (
    <div className="mx-3 flex items-center gap-2">
      <div
        className="grid h-6 w-6 place-content-center rounded-full"
        style={{
          backgroundColor: statusColor(status),
        }}
      >
        {status === "success" ? (
          <ShieldCheck className="h-4 w-4 text-white" />
        ) : (
          <ShieldX className="h-4 w-4 text-white" />
        )}
      </div>
      <span
        className="text-[0.9375rem] font-bold leading-[2.375rem]"
        style={{ color: statusColor(status) }}
      >
        Lorem
      </span>
    </div>
  );
};

export default StatusLegend;
