"use client";

import Spline from "@splinetool/react-spline";

export default function SplineCard({ url }) {
  return (
    <div className="sm:w-full md:w-2/4 lg:w-3/5">
      <Spline scene={`${url}`} />
    </div>
  );
}
