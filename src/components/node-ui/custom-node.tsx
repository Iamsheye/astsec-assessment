import React from "react";
import { Handle, type NodeProps, Position } from "@xyflow/react";

interface CustomNodeProps extends NodeProps {
  data: {
    label: string;
  };
}

const CustomNode = ({ data }: CustomNodeProps) => {
  return (
    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-500">
      <div className="font-bold text-white">{data.label}</div>
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default CustomNode;
