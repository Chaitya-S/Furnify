"use client";

import { montserrat } from "@/Fonts/FontMan";
import Spline from "@splinetool/react-spline";
import { useRef } from "react";

export default function FurnitureEditor() {
  const spline = useRef();

  const buttons = [
    {
      name: "Pink Sofa",
      splName: "Sofa Pink",
    },
    {
      name: "Bunk Bed",
      splName: "Bunkbed",
    },
    {
      name: "U - Sofa",
      splName: "Sofa U Form",
    },
    {
      name: "Small Table",
      splName: "Table Blue",
    },
    {
      name: "Office Chair",
      splName: "Office Chair",
    },
    {
      name: "Curved Chair",
      splName: "Curved Chair",
    },
    {
      name: "Design Chair",
      splName: "Design Chair",
    },
    {
      name: "Luxurious Bed",
      splName: "Luxurious_bed",
    },
    {
      name: "Keyboard Table",
      splName: "Keyboard Table",
    },
  ];

  const onLoad = (s) => {
    spline.current = s;

    for (const ob of buttons) {
      const objectToHide = s.findObjectByName(`${ob.splName}`);

      if (objectToHide) {
        objectToHide.visible = false;
      }
    }
  };

  const onToggle = (b) => {
    const obj = spline.current.findObjectByName(`${b.splName}`);
    if (obj) obj.visible = !obj.visible;
  };

  return (
    <div>
      <Spline
        onLoad={onLoad}
        scene="https://prod.spline.design/9EAC3CKE95KEsQLv/scene.splinecode"
        className="p-8"
      />
      <div className={`flex flex-row justify-center ${montserrat}`}>
        {buttons.map((b) => (
          <button
            key={b.splName}
            onClick={() => onToggle(b)}
            className="text-[#553939] border-2 rounded-lg border-[#553939] p-2 m-2 hover:bg-[#eadbc8]"
          >
            {b.name}
          </button>
        ))}
      </div>
      {/* <div className={`text-[#553939] mt-8 ${montserrat}`}>
        <p className="flex justify-center text-3xl">Instructions</p>
        <ul className="mx-8 pb-8 list-disc flex-col">
          <li className="text-xl absolute left-[500px]">
            Use the above buttons to add or remove an object
          </li>
          <li className="text-xl absolute left-[500px] top-[100px]">
            Use one finger to rotate room
          </li>
        </ul>
      </div> */}
    </div>
  );
}
