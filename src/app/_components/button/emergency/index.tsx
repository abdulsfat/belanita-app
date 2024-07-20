const { Phone } = require("lucide-react");

import React from "react";

export const ButtonEmergency = () => {
  return (
    <>
      <button className="flex flex-row justify-center items-center bg-tertiary rounded-3xl px-5 pe-1 p-1 ">
        Emergency Call
        <span className="ms-2 bg-secondary rounded-full p-2">
          <Phone className=" stroke-tertiary " />
        </span>
      </button>
    </>
  );
};
