import Review from "./Review";
import { client } from "../../../sanity/lib/client";
import { groq } from "next-sanity";
import AddReview from "./AddReview";

export default async function Reviews({ productId }) {
  const allreviews = await client.fetch(
    groq`*[type == "reviews"] && productid == "${productId}"`
  );

  console.log(allreviews);

  return (
    <div>
      <AddReview productId={productId} />
      <Review />
    </div>
  );
}
