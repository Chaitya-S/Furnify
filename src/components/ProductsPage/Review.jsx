import { client } from "../../../sanity/lib/client";

export default function Review({ review, deleteReview }) {
  return (
    <div className="p-6">
      <div className="text-[#553939] flex items-center px-4 py-4 shadow-2xl space-x-3 rtl:space-x-reverse rounded-lg bg-[#eadbc8]">
        <img
          src={review.userimage}
          alt=""
          height={50}
          width={50}
          className="rounded-full"
        />
        <div className="">
          <div className="text-[#553939] text-2xl">{review.username}</div>
          <div className="text-[#704f4f]">{review.message}</div>
        </div>
        <button onClick={() => deleteReview(review)}>Delete</button>
      </div>
    </div>
  );
}
