import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";
import { urlForImage } from "../../sanity/lib/image";

export default async function BestSeller() {
  const products = await client.fetch(
    groq`*[type == "product" && bestseller == true]`
  );

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div>
        {products.map((p) => {
          <img src={urlForImage(p.image)} alt="" />;
        })}
      </div>
    </div>
  );
}
