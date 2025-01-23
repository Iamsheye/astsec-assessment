"use client";
import { ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import DetailsColumn from "@/components/details-column";

const initialNodes = [
  { id: "1", position: { x: 100, y: 100 }, data: { label: "1" } },
  { id: "2", position: { x: 200, y: 200 }, data: { label: "2" } },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col gap-5 px-5 py-3 pb-24 tracking-[0.01em] md:flex-row md:px-9 md:py-7 md:pb-7">
      <DetailsColumn />
      <div className="shadow-drop order-1 grow rounded-2xl bg-white px-6 py-5 md:order-2">
        <ReactFlow nodes={initialNodes} edges={initialEdges} />
      </div>
    </main>
  );
}
