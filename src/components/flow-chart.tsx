import React from "react";
import {
  ReactFlow,
  Controls,
  Background,
  type Node,
  type Edge,
} from "@xyflow/react";
import CustomEdge from "./node-ui/custom-edge";
import CustomNode from "./node-ui/custom-node";
// import CustomNode from "";
// import CustomEdge from "./CustomEdge";

const FlowDiagram: React.FC = () => {
  const nodes: Node[] = [
    {
      id: "node1",
      data: { label: "Loremipsum" },
      position: { x: 50, y: 100 },
      type: "custom",
    },
    {
      id: "node2",
      data: { label: "Loremipsu" },
      position: { x: 300, y: 100 },
      type: "custom",
    },
    {
      id: "node3",
      data: { label: "Loremipsu" },
      position: { x: 550, y: 100 },
      type: "custom",
    },
    {
      id: "node4",
      data: { label: "Loremipsumdo" },
      position: { x: 800, y: 100 },
      type: "custom",
    },
  ];

  const edges: Edge[] = [
    { id: "edge1", source: "node1", target: "node2", type: "custom" },
    { id: "edge2", source: "node2", target: "node3", type: "custom" },
    { id: "edge3", source: "node3", target: "node4", type: "custom" },
  ];

  return (
    <div className="h-[14.5rem] w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={{ custom: CustomNode }}
        edgeTypes={{ custom: CustomEdge }}
      >
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default FlowDiagram;
