"use client";
import { useState } from "react";
import { ReactFlow } from "@xyflow/react";
import { Button } from "@/components/ui/button";
import "@xyflow/react/dist/style.css";
import { Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { AccordionTrigger } from "@radix-ui/react-accordion";

const initialNodes = [
  { id: "1", position: { x: 100, y: 100 }, data: { label: "1" } },
  { id: "2", position: { x: 200, y: 200 }, data: { label: "2" } },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

export default function HomePage() {
  const List = [
    { value: "10/19/2017" },
    { value: "Ut" },
    { value: "Eros" },
    { value: "Eros" },
    { value: "Yes", hasCheck: true },
    { value: "Sit" },
    { value: "Lorem ipsum dolor" },
    { value: "Lorem ipsum dolor" },
  ];

  const AccordionList = [
    { title: "Lorem P" },
    { title: "Lorem S" },
    { title: "Lorem T" },
  ];

  return (
    <main className="flex min-h-screen flex-col gap-5 px-5 py-3 pb-24 tracking-[0.01em] md:flex-row md:px-9 md:py-7 md:pb-7">
      <aside className="shadow-drop order-2 h-full grow-0 overflow-y-scroll rounded-2xl bg-white px-6 py-5 md:order-1 md:h-[calc(100dvh-3.5rem)] md:basis-[31%]">
        <div className="flex flex-col gap-3">
          <div>
            <div className="mb-8 leading-[1.375rem]">
              <h2 className="mb-3 text-[1.25rem] font-bold text-[#02983E]">
                Description
              </h2>
              <p className="text-[0.75rem] text-gray-soft-700">
                Lorem ipsum dolor sit amet consectetur. Aenean sodales
                pellentesque gravida nibh et magna faucibus. Dui commodo ut
                metus amet egestas habitant viverra. Quisque fusce senectus
                facilisis non diam leo nulla sem pellentesque. Sit in vel sed
                cursus metus sit fringilla vestibulum.
              </p>
            </div>
            <div className="mb-6 leading-[1.375rem]">
              <h2 className="mb-3 text-[1.25rem] font-bold text-[#02983E]">
                Extra
              </h2>
              <p className="text-[0.75rem] text-gray-soft-700">
                Lorem ipsum dolor sit amet consectetur. Tempus a id adipiscing
                fames egestas tellus dis pretium tempus. Justo nisl nisl lorem
                lectus id ornare. Rhoncus in egestas in amet porttitor
                pellentesque sit. Amet gravida integer velit felis. Eu
                consectetur interdum auctor sed aliquam. Eu pulvinar accumsan
                sed id. Duis a aliquam eu quisque commodo lectus. Lectus ipsum
                velit purus viverra vulputate viverra in nunc nulla. Euismod
                rhoncus mauris urna orci gravida sagittis netus. Amet mus in vel
                etiam. Interdum habitant congue massa in etiam sit. Commodo nibh
                viverra lobortis augue lorem quam lorem suspendisse.
              </p>
            </div>
          </div>

          <hr className="bg-gray-soft-100 w-full" />
          {List.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-5 text-[0.9375rem]"
            >
              <p className="font-bold capitalize text-[#334155]">
                Lorem ipsum dolor
              </p>
              <div className="flex items-center gap-1">
                {item.hasCheck && <Check size={16} color="#08B94E" />}
                <p className="text-gray-soft-700">{item.value}</p>
              </div>
            </div>
          ))}
          <hr className="bg-gray-soft-100 w-full" />
          <div className="flex flex-col gap-3">
            <p className="font-bold capitalize text-[#334155]">
              Lorem ipsum dolor sit
            </p>
            <Accordion type="multiple" className="flex flex-col gap-5">
              {AccordionList.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={item.title}
                  className="border-gray-soft-50 rounded-2xl border px-4 py-3"
                >
                  <div>
                    <AccordionTrigger asChild>
                      <button className="w-full cursor-pointer text-left">
                        <p className="mb-3 text-[0.9375rem] font-bold text-[#030229]">
                          {item.title}
                        </p>
                        <div className="bg-gray-soft-25 flex flex-wrap items-center gap-4 rounded-lg px-4 py-1.5 capitalize xl:flex-nowrap">
                          <div className="border-gray-soft-400 flex items-center gap-2 xl:border-r xl:pr-4">
                            <svg
                              width="53"
                              height="53"
                              viewBox="0 0 53 53"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="26.46"
                                cy="26.4597"
                                r="26.46"
                                fill="#D7EAFF"
                              />
                              <path
                                d="M20.2725 20.1676H20.2835M20.2725 33.2926H20.2835M18.085 15.7926H35.585C36.7931 15.7926 37.7725 16.772 37.7725 17.9801V22.3551C37.7725 23.5632 36.7931 24.5426 35.585 24.5426H18.085C16.8769 24.5426 15.8975 23.5632 15.8975 22.3551V17.9801C15.8975 16.772 16.8769 15.7926 18.085 15.7926ZM18.085 28.9176H35.585C36.7931 28.9176 37.7725 29.897 37.7725 31.1051V35.4801C37.7725 36.6882 36.7931 37.6676 35.585 37.6676H18.085C16.8769 37.6676 15.8975 36.6882 15.8975 35.4801V31.1051C15.8975 29.897 16.8769 28.9176 18.085 28.9176Z"
                                stroke="#1873DE"
                                stroke-width="2.1875"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>

                            <div>
                              <span className="text-gray-soft-900 mb-0.5 block text-[0.75rem] font-semibold leading-[0.875em]">
                                Server
                              </span>
                              <span className="text-gray-soft-500 block text-[0.625rem] font-medium leading-[0/75rem]">
                                Server
                              </span>
                            </div>
                          </div>
                          <p className="text-gray-soft-900 text-[0.875rem]">
                            Lorem ipsum dolor sit amet consectetur.
                          </p>
                        </div>
                      </button>
                    </AccordionTrigger>
                    <AccordionContent asChild className="p-0">
                      <p className="pt-4 text-[0.9375rem] text-gray-soft-700">
                        Lorem ipsum dolor sit amet consectetur. Nunc Vitae
                        Tortor Convallis Vitae Arcu Magna
                      </p>
                    </AccordionContent>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </aside>
      <div className="shadow-drop order-1 grow rounded-2xl bg-white px-6 py-5 md:order-2">
        <ReactFlow nodes={initialNodes} edges={initialEdges} />
      </div>
    </main>
  );
}
