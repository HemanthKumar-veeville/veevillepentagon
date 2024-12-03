import React from "react";
import { WorkFilter } from "./WorkFilter";

export function WorkHeader({ activeTab, setActiveTab }) {
  return (
    <div className="relative pb-[1px] mb-12">
      <h1 className="text-[64px] leading-none font-normal absolute left-0 -top-1">
        Work
      </h1>
      <div className="flex justify-center border-b border-gray-200">
        <div className="flex space-x-16 pt-6">
          <WorkFilter
            active={activeTab === "client"}
            onClick={() => setActiveTab("client")}
          >
            TYPE OF CLIENT
          </WorkFilter>
          <WorkFilter
            active={activeTab === "work"}
            onClick={() => setActiveTab("work")}
          >
            TYPE OF WORK
          </WorkFilter>
          <WorkFilter
            active={activeTab === "all"}
            onClick={() => setActiveTab("all")}
          >
            ALL CLIENTS
          </WorkFilter>
        </div>
      </div>
    </div>
  );
}
