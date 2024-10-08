import React from "react";
import { SecTwoNav } from "../components/SectionTwo/SecTwoNav";
import { Table } from "../components/SectionTwo/Table";

export const SectionTwo = () => {
  return (
    <div className="border-t-2 border-r-2 border-primaryTwo mr-4">
      <div className="border-b-2 border-primaryTwo">
        <h2 className="px-7 py-2 text-lg font-semibold text-white">
          Top Collections
        </h2>
      </div>
      <div>
        <SecTwoNav />
        <Table />
      </div>
    </div>
  );
};
