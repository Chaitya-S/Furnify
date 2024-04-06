import { ivymode, montserrat } from "@/Fonts/FontMan";

export default function ProfileCard({ name, designation, image }) {
  return (
    <div className="py-8 px-8 max-w-sm mx-auto bg-[#f8f0e5] rounded-xl space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <img
        className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0 hover:ring-offset-4 hover:ring hover:ring-[#561c24] grayscale hover:grayscale-0"
        src={image}
        alt="Woman's Face"
      />
      <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5">
          <p className={`text-lg text-[#561c24] font-semibold ${ivymode}`}>
            {name}
          </p>
          <p className={`text-[#a77979] font-medium ${montserrat}`}>
            {designation}
          </p>
        </div>
      </div>
    </div>
  );
}
