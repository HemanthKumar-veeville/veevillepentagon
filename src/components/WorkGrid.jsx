import React from "react";
import { WorkCategory } from "./WorkCategory";

export function WorkGrid({ categories }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
      {categories.map((category) => (
        <WorkCategory
          key={category.title}
          title={category.title}
          count={category.count}
          imageUrl={category.imageUrl}
        />
      ))}
    </div>
  );
}
