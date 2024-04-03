import { useRef } from "react";
import { client } from "../../../sanity/lib/client";
import { useUser } from "@clerk/nextjs";

export default function AddReview({ slug }) {
  const reviewInputRef = useRef();
  const { user } = useUser();

  const handleAddReview = () => {
    // also send a toast notification
    if (reviewInputRef.current.value === "") return;

    client
      .create({
        _type: "reviews",
        username: user.fullName,
        userimage: user.imageUrl,
        message: reviewInputRef.current.value,
        productslug: slug,
      })
      .then((res) => {
        console.log(`Review created with id = ${res._id}`);
      });

    reviewInputRef.current.value = "";
    // TODO TOAST HERE
  };
  return (
    <>
      <div className="flex mx-4 mt-4 p-2 pb-5 rounded-lg">
        <input
          type="text"
          ref={reviewInputRef}
          name="review"
          id="review"
          autoComplete="off"
          placeholder="Write a review..."
          className="text-[#704f4f] rounded-full p-2 bg-[#eadbc8] hover:bg-[#dac0a3] shadow-md"
        />
        <button
          onClick={handleAddReview}
          className="text-[#553939] ml-2 rounded-full px-4 hover:text-[#a77979] hover:bg-[#eadbc8]"
        >
          Post
        </button>
        <button
          onClick={() => {
            reviewInputRef.current.value = "";
          }}
          className="text-[#553939] ml-2 rounded-full px-4 hover:text-[#a77979] hover:bg-[#eadbc8]"
        >
          Clear
        </button>
      </div>
    </>
  );
}
