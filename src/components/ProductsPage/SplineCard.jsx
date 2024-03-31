"use client";

import Spline from "@splinetool/react-spline";

import "./test.css";

export default function SplineCard({ url }) {
  return (
    <div className="md:col-span-2 w-full h-full">
      <Spline style={{ width: "100%", height: "100%" }} scene={`${url}`} />
    </div>
  );
}
