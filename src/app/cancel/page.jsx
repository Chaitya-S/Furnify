import { montserrat } from "@/Fonts/FontMan";

export default function Cancel() {
  return (
    <div
      className={`flex flex-col justify-center items-center text-black h-[100vh] gap-4 ${montserrat}`}
    >
      <h1 className="text-4xl md:text-6xl text-[#553939]">
        {" "}
        Order Cancelled!!{" "}
      </h1>
      <h3 className="text-lg md:text-2xl text-[#986a4d]">
        Please come again!!
      </h3>
    </div>
  );
}
