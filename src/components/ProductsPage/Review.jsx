import { useUser } from "@clerk/nextjs";

export default function Review({ review, deleteReview }) {
  const { user } = useUser();

  const bool = user?.fullName === review.username;

  return (
    <div className="px-6 pb-6">
      <div className="text-[#553939] flex justify-between items-center px-6 py-4 shadow-2xl rtl:space-x-reverse rounded-lg bg-[#eadbc8]">
        <div className="flex space-x-3">
          <img
            src={review.userimage}
            alt=""
            height={50}
            width={50}
            className="rounded-full"
          />
          <div>
            <div className="text-[#553939] text-2xl">{review.username}</div>
            <div className="text-[#704f4f]">{review.message}</div>
          </div>
        </div>
        {bool ? (
          <button
            onClick={() => deleteReview(review)}
            className="hover:text-[#a77979]"
          >
            Delete
          </button>
        ) : null}
      </div>
    </div>
  );
}
