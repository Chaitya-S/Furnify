import { groq } from "next-sanity";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";

export default async function BestSeller() {
  const products =
    await client.fetch(groq`*[_type == "product" && bestseller == true] {
        _id,
        image,
        name,
    }`);

  return (
    <div>
      {products.map((p) => (
        <img key={p._id} src={urlForImage(p.image)} />
      ))}
    </div>
  );
}
