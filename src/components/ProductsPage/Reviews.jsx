import Review from "./Review";
import AddReview from "./AddReview";
import { useEffect, useState } from "react";
import { client } from "../../../sanity/lib/client";
import { groq } from "next-sanity";
import { montserrat } from "@/Fonts/FontMan";

export default function Reviews({ allreviews, slug }) {
  const [r, setR] = useState(allreviews);

  useEffect(() => {
    const subscribe = client
      .listen(
        groq`*[_type == "reviews" && productslug == "${slug}"] {
          _id,
          username,
          userimage, 
          message,
        }`
      )
      .subscribe((update) => {
        const newR = update.result;

        if (newR) {
          setR((prev) => [...prev, newR]);
        } else {
          const updatedList = r.filter((a) => a._id != update.documentId);
          setR([...updatedList]);
        }
      });

    return () => subscribe.unsubscribe();
  }, [r]);

  const deleteReview = (review) => {
    client
      .delete(review._id)
      .then(() => {
        const updatedReviews = r.filter((a) => a._id != review._id);
        setR([...updatedReviews]);
      })
      .catch((e) => {
        console.log("Could not delete review");
      });
  };

  return (
    <div className={`${montserrat}`}>
      <AddReview slug={slug} />
      {r.map((review) => (
        <Review key={review._id} deleteReview={deleteReview} review={review} />
      ))}
    </div>
  );
}
