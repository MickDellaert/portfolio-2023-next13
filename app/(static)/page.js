// export const dynamic = "force-dynamic";
export const revalidate = 0;

import supabase from "../../utils/supabase";
// import Filter from "@/app/home/Filter";

export default async function Posts({ searchParams }) {
  let filter = searchParams.tag;

  if (filter) {
    filter = filter.split(",");
  }

  let query = supabase
    .from("projects")
    .select(`*, icons("*"), skills!inner("*"), images("*")`);

  if (filter) {
    query = query.in("skills.iconName", filter);
  }

  const { data } = await query;

  return (
    <>
      <div className="mt-[100px]"></div>
      {/* <Filter /> */}
      <pre className="mt-[100px] text-sm">{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
