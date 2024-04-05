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
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mx-6 mt-6 mb-8 p-4 bg-[#eadbc8]">
      {products.map((p) => (
        <img
          key={p._id}
          src={urlForImage(p.image)}
          className="shadow-lg hover:shadow-2xl hover:scale-105 border-2 border-[#eadbc8]"
        />
      ))}
    </div>
  );
}
