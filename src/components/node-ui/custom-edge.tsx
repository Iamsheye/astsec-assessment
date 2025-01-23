import React from "react";
import { type EdgeProps, getBezierPath } from "@xyflow/react";

const CustomEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
}: EdgeProps) => {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <g>
      <path
        id={id}
        className="react-flow__edge-path"
        d={edgePath}
        fill="none"
        stroke="#b1b1b7"
        strokeWidth={2}
        style={style}
      />
      <foreignObject
        width={20}
        height={20}
        x={targetX - 10}
        y={targetY - 10}
        className="react-flow__edge-text"
        requiredExtensions="http://www.w3.org/1999/xhtml"
      >
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500">
          <div className="text-xs font-bold text-white">→</div>
        </div>
      </foreignObject>
    </g>
  );
};

export default CustomEdge;
