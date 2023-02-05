import supabase from "../../../utils/supabase";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const { data: posts } = await supabase.from("projects").select("id");

  console.log(posts);

  return posts?.map((id) => ({
    id: id.id.toString(),
  }));
}

export default async function Post({ params: { id } }) {
  const { data } = await supabase
    .from("projects")
    .select()
    .match({ id })
    .single();

  if (!data) {
    notFound();
  }

  return (
    <>
      <p>{JSON.stringify(data, null, 2)}</p>
      <div className="w-[800px] h-[800px]">

      <img className="w-[800px] h-[800px] object-cover"
        width={800}
        height={800}
        src={`${data.image}.jpg`}
        alt={data.name}
      />

      </div>
    </>
  );
}
