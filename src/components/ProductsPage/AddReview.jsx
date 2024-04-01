import { useRef } from "react";
import { client } from "../../../sanity/lib/client";
import { useUser } from "@clerk/nextjs";

export default function AddReview({ productId }) {
  const reviewInputRef = useRef();
  const { user } = useUser();

  const handleAddReview = () => {
    client
      .create({
        _type: "reviews",
        username: user.fullName,
        userimage: user.imageUrl,
        message: reviewInputRef.current.value,
        productid: productId,
      })
      .then((res) => {
        console.log(`Review created with id = ${res._id}`);
      });

    reviewInputRef.current.value = "";
    // TODO TOAST HERE
  };
  return (
    <>
      <form onSubmit={handleAddReview}>
        <input
          type="text"
          ref={reviewInputRef}
          name="review"
          id="review"
          autoComplete="off"
          placeholder="Write a review..."
          className="text-[#553939]"
        />
      </form>
      <button onClick={handleAddReview} className="text-[#553939]">
        Post
      </button>
      <button
        onClick={() => {
          reviewInputRef.current.value = "";
        }}
        className="text-[#553939]"
      >
        Clear
      </button>
    </>
  );
}
