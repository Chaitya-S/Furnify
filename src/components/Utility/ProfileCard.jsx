import { ivymode, montserrat } from "@/Fonts/FontMan";

export default function ProfileCard({ name, designation, image }) {
  return (
    <div className="p-2 max-w-sm mx-auto bg-[#f8f0e5] rounded-xl space-y-2 sm:py-4 sm:px-4 flex flex-row items-center sm:space-y-0 sm:space-x-6">
      <img
        className="m-4 block h-24 rounded-full sm:shrink-0 hover:ring-offset-4 hover:ring hover:ring-[#561c24] grayscale hover:grayscale-0"
        src={image}
        alt="Face"
      />
      <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5">
          <p className={`text-2xl text-[#561c24] font-semibold ${ivymode}`}>
            {name}
          </p>
          <p className={`text-[#a77979] text-xl ${montserrat}`}>
            {designation}
          </p>
        </div>
      </div>
    </div>
  );
}
